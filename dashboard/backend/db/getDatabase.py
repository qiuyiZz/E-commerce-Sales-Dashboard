from pymongo import MongoClient

def get_database():
    CONNECTION_STRING = "mongodb://127.0.0.1:27017/orders"
    client = MongoClient(CONNECTION_STRING)
    return client['orders']