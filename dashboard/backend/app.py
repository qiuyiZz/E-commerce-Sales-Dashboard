from flask import Flask
from flask_cors import CORS
from modules.users.controller import user_module
from modules.stocks.controller import stock_module
from modules.orders.controller import order_module

app = Flask(__name__)

cors = CORS(app, 
        resources={"/*": {"origins": ["http://localhost:3000"]}}, 
        methods=["GET", "POST", "PUT", "DELETE"],
        allow_headers="*",
        supports_credentials=True,
        expose_headers=[
            "tokens",
            "Set-Cookie",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Credentials",
        ]
        )


app.register_blueprint(order_module)
app.register_blueprint(user_module)
app.register_blueprint(stock_module)

if __name__ == "__main__":

    app.run(debug=True)