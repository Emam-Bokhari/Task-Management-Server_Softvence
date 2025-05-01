# Task Management Application - Backend

## Overview

This project is the backend for a Task Management application designed to help users efficiently manage and track their daily tasks. Built using **Node.js**, **Express**, and **MongoDB**. It's handling various task operations such as creating, updating, deleting, and fetching tasks. It also supports user authentication and authorization.

## Features

- **User Authentication**: Secure login and registration with JWT-based authentication.
- **Task Operations**: Create, read, update, and delete tasks.
- **Task Status Management**: Manage the status of tasks (e.g., Pending, In Progress, Done).
- **Due Dates**: Assign due dates to tasks and track their progress.
- **Database Integration**: MongoDB for storing user and task data.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Environment Variables**: dotenv
- **ORM**: Mongoose

## API Endpoints

### Authentication

- `POST /api/v1/auth/register`: User registration
- `POST /api/v1/auth/login`: User login

### Task Management

- `GET /api/v1/tasks`: Get all tasks
- `POST /api/v1/tasks`: Create a new task
- `GET /api/v1/tasks/:id`: Get a task by ID
- `PATCH /api/v1/tasks/:id`: Update an existing task
- `PUT /api/v1/tasks/:id/status`: Update task status
- `DELETE /api/tasks/:id`: Delete a task

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance (either locally or using MongoDB Atlas)
- Postman or any API testing tool (optional for testing)

### Installation

1. Clone this repository:

```bash
   git clone https://github.com/Emam-Bokhari Task-Management-Server_Softvence.git
```

2. Navigate to the project directory:

`bash cd Task-Management-Server_Softvence`

3. Install dependencies:

`bash npm install`

4. Create a .env file in the root of the project and set up your environment variables:

```bash

NODE_ENV=development
PORT=5000
DATABASE_URL=your_mongo_db_uri
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=your_jwt_secret
```

5. Start the server:

```bash
npm run start:dev
```

The server will now be running on http://localhost:5000.

## Contact

For reach out at:

📧 Email: moshfiqurrahman37@gmail.com

🌎 [Linkedin](https://www.linkedin.com/in/moshfiqur-rahman-emam-bokhari/)
