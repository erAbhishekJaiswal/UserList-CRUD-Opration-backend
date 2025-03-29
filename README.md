# UserList-CRUD-Opration-backend
Here is a sample format for a `README.md` file for your project based on the `package.json` you've provided:

```markdown
# Backend Project

## Project Overview

This is a backend project that uses Node.js and various npm packages. The project is designed to handle authentication, routing, and data management for an application.

## Features

- Authentication with JWT (JSON Web Tokens)
- Database management with MongoDB (via Mongoose)
- Secure password handling using bcryptjs
- CORS handling
- Cookie management
- Live development server with Nodemon

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- Bcryptjs
- CORS
- Cookie-parser
- Nodemon

## Installation

Follow the steps below to set up the backend locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend.git
   ```
   
2. Navigate into the project folder:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To start the project, use the following command:

```bash
npm start
```

This will start the server using `index.js` as the main entry point.

### Development

During development, you can use `nodemon` to automatically restart the server on code changes:

```bash
npm run dev
```

## API Endpoints

### `/api/login`

- **Method**: POST
- **Description**: Logs in a user and returns a JWT token.
- **Body**: `username` and `password` (in JSON format)

### `/api/register`

- **Method**: POST
- **Description**: Registers a new user.

### `/api/protected`

- **Method**: GET
- **Description**: Protected route that requires a valid JWT.

## Dependencies

The following npm packages are required for this project:

- **bcryptjs**: A library to hash passwords securely.
- **cookie-parser**: Middleware for handling cookies.
- **cors**: Middleware for handling Cross-Origin Resource Sharing (CORS).
- **express**: Web framework for Node.js.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens.
- **mongoose**: MongoDB object modeling tool.
- **nodemon**: Utility to automatically restart the server on code changes.
- **router**: A lightweight routing library for Express.js.

## License

This project is licensed under the ISC License.
