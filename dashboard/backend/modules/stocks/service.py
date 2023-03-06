import sys
from bson.objectid import ObjectId
# setting path
sys.path.append('../../db')
from db.getDatabase import get_database

# get stocks
def getStocks(user_id):
    db = get_database()
    stocks = db['stocks']
    results = stocks.find({
        "owner": ObjectId(user_id)
    })
    stocks = []
    for result in results:
        stocks.append({
            "name": result['name'],
            "price": result['price'],
            "quantity": result['quantity'],
            "image": result['image'],
            "owner": str(result['owner']),
            "_id": str(result['_id'])
        })
    return stocks

# create stock
def createStock(name, price, quantity, image, user_id):
    db = get_database()
    stocks = db['stocks']
    stock = stocks.insert_one({
        "name": name,
        "price": price,
        "quantity": quantity,
        "image": image,
        "owner": ObjectId(user_id),
    })
    return stock

# update stock
def updateStock(stock_id, name, price, quantity, image):
    db = get_database()
    stocks = db['stocks']
    return stocks.find_one_and_update({
        "_id": ObjectId(stock_id),
    }, {
        "$set": {
            "name": name,
            "price": price,
            "quantity": quantity,
            "image": image,
        }
    })

# delete stock
def deleteStock(stock_id):
    db = get_database()
    stocks = db['stocks']
    return stocks.find_one_and_delete({
        "_id": ObjectId(stock_id),
    })

# add stock quantity
def addStock(stock_id, quantity):
    db = get_database()
    stocks = db['stocks']
    return stocks.find_one_and_update({
        "_id": ObjectId(stock_id)
    }, {
        "$inc": {
            "quantity": quantity
        }
    })

# reduce stock quantity
def reduceStock(stock_id, quantity):
    db = get_database()
    stocks = db['stocks']
    return stocks.find_one_and_update({
        "_id": ObjectId(stock_id)
    }, {
        "$inc": {
            "quantity": -quantity
        }
    })