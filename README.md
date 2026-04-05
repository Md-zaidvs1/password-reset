# Password Reset App

A full-stack authentication app with password reset flow built with React, Node.js, Express, and MongoDB.

## Live Demo
- Frontend: https://password-reset-frontend-3k9x.onrender.com
- Backend: https://password-reset-backend-m4n4.onrender.com

## Tech Stack
- React + Bootstrap (Frontend)
- Node.js + Express.js (Backend)
- MongoDB + Mongoose
- Nodemailer + Mailtrap

## Features
- Register new account
- Login with email and password
- Forgot Password sends reset email
- Reset Password with token verification and expiry

## API Endpoints
POST /api/auth/register
POST /api/auth/login
POST /api/auth/forgot-password
GET  /api/auth/verify-token/:token
POST /api/auth/reset-password/:token

## GitHub
https://github.com/Md-zaidvs1/password-reset