# 🔐 Full-Stack Login System

A complete authentication system with role-based access control built using React, Node.js, Express, and MongoDB.

## 📋 Overview

This project demonstrates a secure login/registration system where:
- **Admin users** (khulood@gmail.com) are redirected to the Dashboard
- **Regular users** are redirected to their Profile Card
- Authentication is handled using JWT tokens and bcrypt password hashing

## ✨ Features

- User Registration and Login
- JWT token-based authentication
- Role-based redirection (Admin vs Regular User)
- User profile display with modern UI
- Token storage in localStorage

## 🛠️ Technologies Used

**Frontend:** React, Vite, Axios, React Router, CSS3  
**Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT

## 📁 Project Structure
```
project-root/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── UserCard.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── UserCard.jsx
│   │   ├── styles/
│   │   │   ├── dashboard.css
│   │   │   ├── global.css
│   │   │   ├── home.css
│   │   │   ├── login.css
│   │   │   ├── navbar.css
│   │   │   ├── register.css
│   │   │   ├── usercard.css
│   │   │   └── usercardd.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── backend/
    ├── controllers/
    │   ├── authController.js
    │   └── userController.js
    ├── models/
    │   └── User.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── userRoutes.js
    ├── node_modules/
    ├── .env
    ├── package-lock.json
    ├── package.json
    └── server.js
```

## 🔍 How It Works

### 1. User Registration
- User fills registration form → Data sent to backend
- Backend hashes password with bcrypt → Saves user in MongoDB
- Success message returned

### 2. User Login
- User enters credentials → Axios sends POST request to `/api/v1/auth/login`
- Backend verifies credentials and generates JWT token
- Token and user data stored in localStorage

### 3. Role-Based Redirection
```javascript
if (email === "khulood@gmail.com") {
  navigate("/dashboard");
  // Message: "Welcome Khulood! Redirecting to your dashboard..."
} else {
  navigate("/usercard");
  // Message: "Login successful! Redirecting to your profile..."
}
```

### 4. User Profile Display
- UserCard.jsx retrieves user data from localStorage
- Displays name, email, and role in a styled card
- Includes hover effects and modern design

## 🚀 Setup Instructions

### Backend Setup

1. Navigate to backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## 🔌 API Endpoint

**Login:** `POST /api/v1/auth/login`

Request:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user"
  }
}
```

## 🔐 Security Features

- **JWT Tokens:** Secure token-based authentication
- **localStorage:** Token and user data stored client-side for session management

## 🚧 Future Enhancements

- Forgot Password functionality
- Email verification
- Two-Factor Authentication (2FA)
- User profile editing
- Role management system

---

**Built with ❤️ using React and Node.js**