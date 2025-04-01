# Book-App

A simple and interactive application for managing a collection of books, built using **React** and **Node.js** (MERN stack). This app allows users to add, view, and remove books from their collection.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Book-App** allows users to:

- View a list of all books.
- Add a new book to the collection.
- Delete a book from the collection.
- Update book details (title, author, description).

This project is designed to help users manage their personal library or book collection with an intuitive interface and CRUD functionality.

## Features

- **CRUD Operations**: Add, view, edit, and delete books.
- **Responsive UI**: The app works seamlessly on both desktop and mobile devices.
- **Database**: Book information is stored in a MongoDB database for persistent data management.
- **RESTful API**: The app uses an Express.js backend with a REST API for handling requests.
- **User Authentication**: Secure login and registration functionality using JWT tokens (optional).

## Tech Stack

- **Frontend**:

  - ReactJS
  - React Router
  - Axios for HTTP requests
  - CSS / SCSS / Tailwindcss (or your preferred styling framework)

- **Backend**:

  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (ODM for MongoDB)
  - JWT Authentication (optional)

- **Other**:
  - Git for version control
  - npm for managing dependencies

## Installation

### Frontend

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/SteeveSticks/book-fullstack-mern-stack-app.git

   ```

2. Navigate to the frontend folder:

   ```bash
   cd book-app/frontend

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend should now be running at `http://localhost:5173` (vite).

### Backend

1. Navigate to the backend folder:

   ```bash
   cd book-app/backend

   ```

2. Install the dependencies:

   ```bash
   npm install

   ```

3. Create a `.env` file in the backend folder with the following environment variables:

   ```plaintext
   MONGODB_URI=your-mongodb-connection-string
   PORT=8080
   JWT_SECRET=your-jwt-secret
   ```

4. Start the backend server:

   ```bash
   npm run devStart
   ```

5. The backend should now be running at `http://localhost:5000`.

## Frontend and Backend Together

1. Run both frontend and backend servers concurrently:
   Option 1: Use concurrently to run both servers:
   ```bash
   npm install -g concurrently
   ```

In the **root project folder**, add a script in the `package.json` to run both servers:

```json
  "scripts": {
  "dev": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
  "start:frontend": "cd frontend && npm start",
  "start:backend": "cd backend && npm start"
}
```

Then, start both servers with:

```bash
npm run dev
```

## MongoDB Setup

- Make sure you have MongoDB running on your local machine, or you can use a cloud-based solution like `MongoDB Atlas`.

- Get the MongoDB URI connection string and add it to the `.env` file.

## Usage

Once the app is running, navigate to:

- **Frontend (React app)**: You will be able to interact with the book collection, adding and removing books.

- **Backend (API)**: The backend exposes the following RESTful endpoints:

  - **GET** `/api/books`: Get a list of all books in the collection.

  - **POST** `/api/books`: Add a new book to the collection (requires book details in the body).

  - **PUT** `/api/books/:id`: Update book information (title, author, description).

  - **DELETE** `/api/books/:id`: Delete a book from the collection.

## Contributing

Contributions to this project are welcome! To contribute:

1. Fork the repository.

2. Create a new branch for your changes.

3. Make your changes and commit them.

4. Push your changes to your forked repository.

5. Open a pull request.

Please ensure that your code adheres to the project's coding standards and passes all the tests.

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.

## Additional Information

- **Libraries Used**: If there are additional libraries or tools used in your app, make sure to list them in this section with brief descriptions.

- Demo: If you plan to deploy the app or share a live demo link, add that here.

# Notes

- Ensure that your MongoDB connection string is valid before trying to run the app.

- Replace placeholder API keys (such as for authentication) in the .env file with your actual keys

```vbnet
 Let me know if you need any further adjustments or additions!
```
