import datetime

from flask import  Blueprint, request, make_response, jsonify
import sys
sys.path.append('../../modules')
from .service import createOrder, getOrders, send
from modules.stocks.service import reduceStock

order_module = Blueprint('orders', __name__, url_prefix='/api/orders')

@order_module.route('/<order_id>/send', methods=['PUT'])
def UpdateOrder(order_id):
    send(order_id)
    return make_response('', 204)

@order_module.route('', methods=['POST'])
def CreateOrder():
    order_data = request.get_json()
    d = datetime.datetime.now()
    if 'date' in order_data:
        d = order_data['date']
    order = createOrder(
        order_data['customer_name'],
        order_data['customer_phone'],
        order_data['customer_address'],
        order_data['stock_id'],
        order_data['stock_price'],
        order_data['quantity'],
        d
    )
    reduceStock(order_data['stock_id'], order_data['quantity'])
    return make_response("", 201)

@order_module.route('', methods=['GET'])
def GetOrders():
    try:
        user = request.cookies.get('user')
        orders = getOrders(user)
        return make_response(jsonify(orders), 200)
    except:
        return make_response('Server Error', 500)