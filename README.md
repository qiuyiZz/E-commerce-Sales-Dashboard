# Sales Dashboard

### This is a sales dashboard that contains a Flask backend connecting to a React frontend, using a MongoDB database.

### Functionality
- Constructed a Sales dashboard application for E-commerce users with real-time data visualization, developed inde- pendently deployable and scalable modules including admin, orders, stock, etc.
- Developed the dashboard with React.js and Python Flask with RESTful APIs and achieved weekly sales data visualization with ChartJs. Applied MongoDB database to implement real-time orders and stock management


### Orders
<img width="1264" alt="2971678211985_ pic_hd" src="https://user-images.githubusercontent.com/110421938/223510809-198f344e-ce43-49dc-be09-be21b37ff1d3.png">
<img width="1268" alt="2991678211986_ pic_hd" src="https://user-images.githubusercontent.com/110421938/223510822-383be44f-ebdc-465d-adfe-d0c38cbb744a.png">

### Stock Management
<img width="1271" alt="2981678211985_ pic_hd" src="https://user-images.githubusercontent.com/110421938/223510854-c4063027-b34b-4930-80b8-e7f5f5fe3b77.png">

### Weekly sales data
<img width="1257" alt="2941678211984_ pic_hd" src="https://user-images.githubusercontent.com/110421938/223510687-828db7a4-acf8-465a-833c-c4888811be24.png">

### Login & Register
<img width="595" alt="2961678211985_ pic_hd" src="https://github.com/qiuyiZz/SalesDashboard/assets/110421938/da5cf00f-7617-47ca-9a6c-222dc03a0a16">
<img width="595" alt="2951678211985_ pic_hd" src="https://github.com/qiuyiZz/SalesDashboard/assets/110421938/55bca323-1f10-4497-8336-de1ee18dde9b">


# How to run the appilication

- Install nodejs npm and react
  - Download nodejs on https://nodejs.org/en/download
- Keep mongoDB running  
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

