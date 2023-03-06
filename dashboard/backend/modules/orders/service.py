import datetime
import sys
from bson.objectid import ObjectId
# setting path
sys.path.append('../../db')
from db.getDatabase import get_database

# update order status
def send(order_id):
    db = get_database()
    orders = db['orders']
    orders.find_one_and_update({
        "_id": ObjectId(order_id)
    }, {
        "$set": {
            "sent": True
        }
    })

# create order
def createOrder(customer_name, customer_phone, customer_address, stock_id, stock_price, quantity, d=datetime.datetime.now()):
    db = get_database()
    orders = db['orders']
    orders.insert_one({
        "customer_name": customer_name,
        "customer_phone": customer_phone,
        "customer_address": customer_address,
        "stock_id": ObjectId(stock_id),
        "stock_price": stock_price,
        "quantity": quantity,
        "createdAt": d
    })

# get orders
def getOrders(owner_id):
    db = get_database()
    orders = db['orders']
    all_orders = orders.aggregate([
        {
            '$lookup': {
                'from': 'stocks',
                'localField': 'stock_id',
                'foreignField': '_id',
                'as': 'stock'
            }
        }, {
            '$unwind': {
                'path': '$stock'
            }
        }, {
            '$match': {
                'stock.owner': ObjectId(owner_id)
            }
        }
    ])
    results = []

    for order in all_orders:
        sent = False
        if 'sent' in order:
            sent = order['sent']
        results.append({
            "_id": str(order['_id']),
            "customer_name": order['customer_name'],
            'customer_phone': order['customer_phone'],
            'customer_address': order['customer_address'],
            'quantity': order['quantity'],
            'stock_price': order['stock_price'],
            'sent': sent,
            'createdAt': order['createdAt'],
            'stock': {
                '_id': str(order['stock']['_id']),
                'name': order['stock']['name'],
                'image': order['stock']['image']
            }
        })
    return results
