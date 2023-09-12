# Sales Dashboard

### This is a sales dashboard that contains a Flask backend connecting to a React frontend, using a MongoDB database.

### Functionality
- Constructed a Sales dashboard application for E-commerce users with real-time data visualization, developed inde- pendently deployable and scalable modules including admin, orders, stock, etc.
- Developed the dashboard with React.js and Python Flask with RESTful APIs and achieved weekly sales data visualization with ChartJs. Applied MongoDB database to implement real-time orders and stock management


### Stock Management
<img width="1396" alt="stocks" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/330fad94-e9b6-4ca7-8007-25390ffced5a">
<img width="1416" alt="add stock" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/e5df41eb-9066-472e-bd35-19b7e964663d">
<img width="1416" alt="edit stock" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/867f1400-8ef5-4e76-8063-76f5055103d5">

### Orders
<img width="1421" alt="orders list" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/382d65e2-4d04-4b2e-962a-57e945efeafd">
<img width="1421" alt="customer page" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/2be8d03f-70bf-4a75-bc05-03617972a366">

<img width="1421" alt="submit order" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/e34532b7-04cc-4993-84cf-5302292de42d">


### Weekly sales data
<img width="1421" alt="analysis" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/1589f9b3-0a6e-4b7e-b936-f25d98a838fd">

### Login & Register
<img width="1101" alt="login" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/83ceb299-01a5-4f2f-91da-796088f2761f">
<img width="1207" alt="register" src="https://github.com/qiuyiZz/E-commerce-Sales-Dashboard/assets/110421938/284d0ebb-6de8-4489-9841-efc5577251e1">



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

