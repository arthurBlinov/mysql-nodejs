# Blog API
- This project is a backend API for a blogging platform. It handles user authentication, post management, and file uploads. The application is built using Node.js and Express, and it uses MySQL as the database.

## Features

### User Authentication
- Register new users.
- Login and receive an authentication token.
- Logout users by clearing the authentication token.

### Post Management
- Create, read, update, and delete blog posts.
- Fetch a single post or all posts.
- Filter posts by category.

### File Uploads
- Upload images for posts.

### Database Integration
- Uses MySQL for storing user and post data.

### Token-Based Authentication
- Uses JWT for secure user authentication.

## Technologies Used
- Node.js
- Express
- MySQL
- bcryptjs for password hashing.
- jsonwebtoken for authentication.
- multer for file uploads.
- cookie-parser for parsing cookies.

## Installation

### Prerequisites
- Node.js installed on your system.
- MySQL database.

### Steps

**Clone the repository:**
- git clone https://github.com/arthurBlinov/mysql-nodejs.git

**Install dependencies:**
- npm install

**Set up environment variables:**
- Create a .env file in the root directory.
- Add the following variables:
HOST=<your-database-host>
ROOT=<your-database-username>
PASSWORD=<your-database-password>
DATABASE=<your-database-name>
JWT_SECRET=<your-jwt-secret>

### Start the server:

**In development mode:**
- npm run server
