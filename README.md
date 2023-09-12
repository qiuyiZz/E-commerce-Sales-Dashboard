# Sales Dashboard

### This is a sales dashboard that contains a Flask backend connecting to a React frontend, using a MongoDB database.

### Functionality
- Constructed a Sales dashboard application for E-commerce users with real-time data visualization, developed inde- pendently deployable and scalable modules including admin, orders, stock, etc.
- Developed the dashboard with React.js and Python Flask with RESTful APIs and achieved weekly sales data visualization with ChartJs. Applied MongoDB database to implement real-time orders and stock management


### Stock Management
<img width="1307" alt="stocks_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/f16d401a-a22e-4727-8c65-1ca01ad30bc6">
<img width="1307" alt="add_stock_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/c3f417e7-378f-40b8-b2c4-d7dc9dcc635f">
<img width="1307" alt="edit_stock_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/94d25217-673c-482d-afb2-298382471aec">

### Orders
<img width="1307" alt="order_list_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/c77b4c45-787c-48a9-9bf7-0188dba4e98c">
<img width="1390" alt="customer_pages_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/0ecfb7c2-12ef-4291-be3e-746ca3babfcf">
<img width="1390" alt="submit_order_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/c3b5cd40-caf3-4039-85a7-0cbd846a86fc">

### Weekly sales data
<img width="1390" alt="analysis_new_2" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/ab52eb32-b5f3-471e-baa8-59ad59b4a296">

### Login & Register
<img width="1101" alt="login_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/bf74be13-7685-418a-8488-27989faa7485">
<img width="1064" alt="register_new" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/543175d7-4584-4cd0-a6ef-c2f289ef043e">

# How to run the appilication

- Install nodejs npm and react
  - Download nodejs on https://nodejs.org/en/download
- Keep mongoDB running
  
  - `brew services start mongodb-community@6.0`
  - Connected to: localhost:27017

## Backend
Step1: Enter the backend directory and create and activate your environment:


`cd backend`

For mac/unix:

**create:** `python3 -m venv env`

**activate:** `source env/bin/activate`

For windows:

**create:** `py -m venv env`

**activate:** `.\env\Scripts\activate`

Step2: Install the requirements using: 

`pip install -r requirements.txt`

Step3: Run `app.py` to start the flask backend server.

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Frontend

`cd frontend`

Run `npm i` to install all dependencies.

Run `npm start` to start the frontend of the application.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

