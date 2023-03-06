from flask import Blueprint, request, make_response, jsonify
from .service import createUser, findUserByUsername, findUserByEmail, checkCredential, allStocks
import traceback
user_module = Blueprint('users', __name__, url_prefix="/api/users")

@user_module.route('/lookup', methods=['GET'])
def lookup():
    stocks = allStocks()
    return make_response(jsonify(stocks), 200)

@user_module.route('/check-auth', methods=['GET'])
def checkAuth():

    if request.cookies.get('user') is not None:
        return make_response({
            "msg": "ok"
        }, 200)
    return make_response("Forbidden", 403)

@user_module.route('/register', methods=['POST'])
def register():
    user_data = request.get_json()
    # check user if exist
    old_user = findUserByUsername(user_data['username'])
    if old_user:
        return make_response("Username existed", 409)

    old_user = findUserByEmail(user_data['email'])
    if old_user:
        return make_response('Email existed', 409)

    createUser(user_data['username'], user_data['email'], user_data['password'])

    return make_response({"msg": "ok"}, 200)


@user_module.route('/login', methods=['POST'])
def login():
    try:
        user_data = request.get_json()
        # check user if exist
        user = findUserByEmail(user_data['email'])

        if user is None:
            return make_response("Not found", 404)

        # check password
        password_valid = checkCredential(user_data['email'], user_data['password'])

        if password_valid == False:
            return make_response('Invalid credentials', 400)

        res = make_response({
            "msg": "ok"
        }, 200)
        res.set_cookie("user", str(user['_id']))
        return res
    except Exception as e:
        print(e)
        traceback.print_exc()
        return make_response("Server error", 500)

@user_module.route('/logout', methods=['GET'])
def logout():
    res = make_response({
        "msg": "ok"
    }, 200)
    res.delete_cookie('user');
    return res