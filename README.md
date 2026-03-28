# Password Reset Flow - Full Stack App

A full-stack web application that implements a complete forgot password and reset password flow using Node.js, React, and MongoDB.

## Features

- User Registration with secure password hashing using bcrypt
- Forgot Password that sends a reset link to the user's email
- Email delivery using Mailtrap for testing
- Reset Password that allows the user to set a new password using the link
- Reset token expires after 1 hour for security
- Passwords stored securely using bcrypt hashing
- Cloud database using MongoDB Atlas

## Tech Stack

**Frontend:**
- React.js with Vite
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer for email sending
- bcryptjs for password hashing
- crypto for token generation

## Project Structure
```
Password-reset/
├── client/
│   └── src/
│       ├── pages/
│       │   ├── ForgotPassword.jsx
│       │   └── ResetPassword.jsx
├── server/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   └── server.js
```

## How to Run Locally

### 1. Clone the repository
```
git clone https://github.com/yourusername/password-reset.git
cd password-reset
```

### 2. Setup the Backend
```
cd server
npm install
```

Create a `.env` file inside the server folder with the following variables:
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
EMAIL=your_email@gmail.com
CLIENT_URL=http://localhost:5173
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASS=your_mailtrap_pass
```

Start the server:
```
npm run dev
```

### 3. Setup the Frontend
```
cd client
npm install
npm run dev
```

### 4. Open the app
Go to http://localhost:5173 in your browser.

## How It Works

1. User enters their email on the Forgot Password page
2. Backend generates a secure random token and saves it to the database
3. An email is sent to the user with a reset link containing the token
4. User clicks the link and is taken to the Reset Password page
5. User enters a new password which gets hashed and saved securely
6. Token is deleted from the database after successful reset

## License

This project is open source and available under the MIT License.