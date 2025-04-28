Hotel Booking Backend API 🏨
A backend API for a Hotel Booking System, built with Node.js, Express.js, MongoDB, and JWT Authentication.
This project handles user authentication, profile management, and connects to a cloud database for storing user data and bookings.
##Features ✨
🛡️ JWT Authentication for secure user login

🔐 Authorization with different access levels

🗂️ Profile Management: Users can create and update their profiles

☁️ Cloud Database connection (MongoDB Atlas)

🛠️ Backend API ready for integration with frontend or mobile applications

🔄 CRUD operations for hotel bookings and user management

##API Endpoints 🚀
1. User Authentication
POST /api/auth/register
Register a new user.

Body:

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
POST /api/auth/login
Login to get a JWT token.

Body:

json
Copy
Edit
{
  "email": "john@example.com",
  "password": "password123"
}
2. User Profile
GET /api/user/profile
Get the profile of the logged-in user.

Authorization: Bearer Token

PUT /api/user/profile
Update the profile of the logged-in user.

Body:

json
Copy
Edit
{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
3. Booking Management
POST /api/booking/create
Create a new hotel booking.

Body:

json
Copy
Edit
{
  "hotelName": "Hotel XYZ",
  "checkInDate": "2025-05-01",
  "checkOutDate": "2025-05-05",
  "userId": "user-id"
}
GET /api/booking/all
Get all bookings of the logged-in user.

DELETE /api/booking/:id
Delete a specific booking by ID.

Tech Stack 🛠️
Node.js

Express.js

MongoDB (Cloud Database)

Mongoose (MongoDB ODM)

JWT (Authentication & Authorization)

dotenv (for environment variables)

Bcrypt.js (for password hashing)
