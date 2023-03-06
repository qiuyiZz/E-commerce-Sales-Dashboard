from flask import Blueprint, request, make_response, jsonify
import json
from .service import createStock, updateStock, deleteStock, addStock, reduceStock, getStocks
import traceback
stock_module = Blueprint('stocks', __name__, url_prefix="/api/stocks")



@stock_module.route('', methods=['POST'])
def CreateStock():
    try:
        stock_data = request.get_json()
        user = request.cookies.get('user')
        stock = createStock(
            stock_data['name'],
            stock_data['price'],
            stock_data['quantity'],
            stock_data['image'],
            user
        )
        return make_response("", 201)
    except Exception as e:
        return make_response(e, 500)

@stock_module.route('', methods=['GET'])
def GetStocks():
    user = request.cookies.get('user')
    stocks = getStocks(user)
    return make_response(jsonify(stocks), 200)

@stock_module.route('/<stock_id>', methods=['PUT'])
def UpdateStock(stock_id):
    stock_data = request.get_json()
    updateStock(stock_id, stock_data['name'], stock_data['price'], stock_data['quantity'], stock_data['image'])
    return make_response('', 204)

@stock_module.route('/<stock_id>', methods=['DELETE'])
def DeleteStock(stock_id):
    deleteStock(stock_id)
    return make_response('', 200)

@stock_module.route('/<stock_id>/add', methods=['PUT'])
def AddStock(stock_id):
    stock_data = request.get_json()
    addStock(stock_id, stock_data['quantity'])
    return make_response('', 200)

@stock_module.route('/<stock_id>/reduce', methods=['PUT'])
def ReduceStock(stock_id):
    stock_data = request.get_json()
    reduceStock(stock_id, stock_data['quantity'])
    return make_response('', 200)