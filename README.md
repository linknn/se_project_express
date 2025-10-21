# 🧥 WTWR (What To Wear?) — Backend Authentication & Authorization

A secure backend for the **WTWR** app that manages users, authentication, and clothing items.  
Built with **Node.js**, **Express**, and **MongoDB**, this project focuses on implementing **JWT-based authentication**, user management, and route protection.

---

## ⚙️ Features

🔐 **User Authentication**

- Secure sign-up and login using email and password
- Passwords are hashed with **bcryptjs** before storage

🛡️ **JWT Authorization**

- Token verification middleware for protected routes
- Only logged-in users can view or modify their own data

👤 **User Management**

- `GET /users/me` – fetch current user’s data
- `PATCH /users/me` – update user profile (name, avatar)

👕 **Clothing Items**

- Public route `GET /items`
- Ownership verification: only the item’s creator can delete it

⚠️ **Error Handling**

- Comprehensive error responses (400, 401, 403, 404, 409, 500)
- Duplicate email and validation error detection

🌍 **CORS Enabled**

- Configured to support requests from the client side

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/linknn/se_project_express.git](https://github.com/linknn/se_project_express.git)
cd se_project_express
```

---

## 🧠 Lessons Learned

- How to implement and verify JWT tokens securely
- How to protect routes with Express middleware
- Managing passwords with bcryptjs
- Writing modular error handlers
- Validating data with Mongoose and validator.js

---

## 📽️ Project Pitch Video

🎥 Check out my Project 13 pitch video where I explain authentication, key challenges, and outcomes:
👉 [Watch Here]()
