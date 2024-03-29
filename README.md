# Taxi Management System

A PBL (Project Based Learning) project for the course DBE (Database Engineering) at Kolhapur Institute of Technology.  
A simple Taxi Management System.

### Features:

- User and Driver Registration.
- User can book a trip and Driver can accept the booking.
- User and Driver can view his/her booked/accepted trips.
- Driver can view the available trips along with the distance and fare.
- User can see the Driver's details when he/she accepts the booking.

### Technical Details:

- Frontend: Bootstrap, HTML, CSS, JavaScript
- Backend: NodeJS, ExpressJS
- Database: MySQL

### Requirements:

- [NodeJS](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Below DataBase Structure](#database "Database & Database Structure")

### Database:

- Name: taxi_management_system
- Tables:
  - user
  - driver
  - admin
  - taxi
  - trip

### Database Schema:

- user:  
![image](https://user-images.githubusercontent.com/66154908/144718389-f33644cc-db92-4d83-a423-b0d74cbdbaa1.png)

- driver:  
![image](https://user-images.githubusercontent.com/66154908/144718410-7401f1c3-b3fe-479d-9226-2d8a9b7a2e53.png)

- admin:  
![image](https://user-images.githubusercontent.com/66154908/144718433-06abc683-b65e-48e0-836f-f31179d2c751.png)

- taxi:  
![image](https://user-images.githubusercontent.com/66154908/144718471-236f7daa-728e-499c-b0ec-fcaf733f969d.png)

- trip:  
![image](https://user-images.githubusercontent.com/66154908/144718450-6b083140-6987-4ae8-9ad5-c32c16ca65c9.png)

### Dependencies:

- express
- mysql
- nodemon

### How to Run:

- cd <root_directory>
- `npm install`
- `npm start`
- Click on the link to open the application: http://localhost:1412/

### Application Pages:

- Home Page: http://localhost:1412/
- User Registration Page: http://localhost:1412/signup-user/
- Driver Registration Page: http://localhost:1412/signup-driver/
- Login Page: http://localhost:1412/login/
- User Dashboard Page: http://localhost:1412/user/
- Driver Dashboard Page: http://localhost:1412/driver/
- Admin Login Page: http://localhost:1412/admin-login/
- Admin Dashboard Page: http://localhost:1412/admin/

### Our APIs:

- Registration:
  - User: `/api/registration/user`
  - Driver: `/api/registration/driver`

- Login: `/api/login/:role`

- Session-End: `/api/session-end/:role`

- Credentials: `/api/credentials/:role`

- Admin Queries:
  - User: `/api/query/user`
  - Driver: `/api/query/driver`
  - Trip: `/api/query/trip`
  - Custom: `/api/query/custom`

- Trip:
  - Booking: `/api/trip/booking`
  - History: `/api/trip/history/:role`
  - Accepting: `/api/trip/accepting`
  - Available: `/api/trip/available`
