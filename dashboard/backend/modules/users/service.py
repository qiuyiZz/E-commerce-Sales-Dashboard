import sys

# setting path
sys.path.append('../../db')
from db.getDatabase import get_database


def allStocks():
    db = get_database()
    stocks = db['stocks']
    results = stocks.find()
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

def checkCredential(email, password):
    db = get_database()
    users = db['users']
    user = users.find_one({
        "email": email,
        "password": password
    })
    return user is not None

def findUserByEmail(email):
    db = get_database()
    users = db['users']
    user = users.find_one({
        "email": email
    })
    return user

def findUserByUsername(username):
    db = get_database()
    users = db['users']
    user = users.find_one({
        "username": username
    })
    return user

def createUser(username, email, password):
    db = get_database()
    users = db['users']
    user = users.insert_one({
        "username": username,
        "email": email,
        "password": password
    })
    # user.inserted_id
    return user