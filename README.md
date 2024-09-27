# GraphBooks

## Description
GraphBook is a full-stack application that enables users to search for books using the Google Books API. Originally built with a RESTful API, the project has been restructured to utilize GraphQL with Apollo Server. Users can search for books and save their favorite results to a MongoDB database for future reference.

**This app is built using the MERN stack:**

- MongoDB: Database for storing user-saved books.
- Express.js: Server-side framework.
- React: Front-end library for building the user interface.
- Node.js: JavaScript runtime for the server.
- GraphQL with Apollo Server: Query language for the API, replacing the previous RESTful structure.


## Features
- Search for books through the Google Books API.
- Save favorite book results to a personal list.
- View saved books with GraphQL queries.
- Modify saved books and delete entries with GraphQL mutations.
- JWT-based authentication middleware integrated with GraphQL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


## Installation
Clone the repository:
git clone https: https://github.com/Ifylee/graphBooks

## Install Dependencies:

```
Run npm install

```
## Environment Variables:
Create a .env file in the root directory and add the following:

MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
GOOGLE_BOOKS_API_KEY=<your-google-books-api-key>

**To start the development server**

```
 npm run develop

```

## Usage
**Frontend:**
- Open the app in your browser.
- Use the search bar to find books by title or author.
- Click "Save" to add books to your personal list.
- View and manage saved books from your account page.

**Backend (GraphQL):**
- Use GraphQL queries and mutations to retrieve or modify data.
- Example queries include fetching saved books or searching Google Books.


## Technologies
**MERN Stack:**
- MongoDB: NoSQL database for storing saved books.
- Express.js: Handles the back-end API requests.
- React: Front-end library for building a responsive UI.
- Node.js: JavaScript runtime environment for the server.

**GraphQL & Apollo Server:** Replaces the RESTful API with GraphQL for   more efficient data querying.

**JWT Authentication:** Secures user login and saved book data.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

This app is deployed to Render via: 


