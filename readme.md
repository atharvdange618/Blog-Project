# Blog Site

This project is a blogging platform developed using Express.js, Node.js, MongoDB, and Bootstrap.

![image](homepage_ui.png)

## Overview

The blog site allows users to create, publish, and view blog posts. It includes features like user authentication, post creation, editing, and deletion.

## Features

- **User Registration/Login**: Users can register and log in to access the blog features.
- **Create and Publish Posts**: Authenticated users can create and publish new blog posts.
- **Edit and Delete Posts**: Users can edit and delete their published posts.
- **View Posts**: All users can view published blog posts on the platform.
- **Session Management**: Utilizes Express session and authentication middleware for user sessions and security.
- **File Upload**: Supports file uploads for blog post images.
- **Error Handling**: Includes error handling for 404 and 500 server errors.

## Technologies Used

- **Express.js**: Handles routing and middleware functionality.
- **Node.js**: Powers the server-side of the application.
- **MongoDB**: Serves as the database to store blog posts and user data.
- **Bootstrap**: Provides front-end styles for responsive and clean UI.

## File Structure

- **Controllers**: Contains various controllers for handling different routes and functionalities.
- **Middleware**: Includes middleware for authentication and validation.
- **Models**: Defines database schemas using Mongoose.
- **Views**: Contains EJS templates for rendering HTML pages.
- **Public**: Holds static files like CSS, JavaScript, and images.

## Usage

1. Ensure MongoDB is running locally or adjust the database connection accordingly.
2. Run `npm install` to install dependencies.
3. Start the server using `node server.js` or `npm start`.
4. Access the application via `http://localhost:3000` in a web browser.

## Routes

- `/`: Homepage displaying published blog posts.
- `/about`: About page providing information about the blog.
- `/contact`: Contact page for reaching out or leaving messages.
- `/auth/register`: User registration page.
- `/auth/login`: User login page.
- `/posts/new`: Form to create a new blog post.
- `/post/:id`: View a specific blog post.
- `/auth/logout`: Logout functionality for authenticated users.

## Notes

- The project utilizes EJS templates for rendering dynamic HTML content.
- Ensure proper error handling and validation to enhance user experience and security.

