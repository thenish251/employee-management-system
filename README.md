# Employee Management System

This is a backend API for an Employee Management System. It supports basic CRUD operations for managing employee records.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Validation](#validation)
- [Authentication](#authentication)
- [Testing](#testing)
- [Pagination](#pagination)
- [Sorting and Filtering](#sorting-and-filtering)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, Read, Update, and Delete (CRUD) operations for employee records.
- Validation for input data.
- Sorting and filtering capabilities for the list of employees.
- Authentication using JSON Web Tokens (JWT).
- Pagination for the list of employees.
- Unit tests for critical components.

1. Navigate to the project directory:
cd employee-management-system

2. Install dependencies:
npm install

3. Run the application:
npm start

The server will be running at http://localhost:3000.

Endpoints
Create Employee:
Endpoint: /api/employees (POST)

Read Employee:
Endpoint: /api/employees/:employeeId (GET)

Update Employee:
Endpoint: /api/employees/:employeeId (PUT)

Delete Employee:
Endpoint: /api/employees/:employeeId (DELETE)

Project Structure
/models: Mongoose models for data schema.
/controllers: API route controllers.
/routes: Express route definitions.
/middlewares: Custom middleware functions.
/tests: Unit tests.
/config.js: Configuration settings.
/app.js: Entry point for the application.
/validationMiddleware.js: Input data validation middleware

Dependencies
Node.js
Express.js
Mongoose
@hapi/joi
jsonwebtoken
chai (for testing)
