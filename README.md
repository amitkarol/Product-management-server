# Products Management – React + Node.js + MongoDB

A full-stack application for managing store products, built with React (client) and Node.js + Express (server), connected to a MongoDB Atlas database.

The system allows adding, editing, deleting, and searching products, with full input validation and a clean user interface.

## Features

- View a list of products
- Add new products via a modal form
- Edit existing products
- Delete products with confirmation
- Search products by product name

## Setup & Run instructions

This repository contains the **Node.js server** for the Product Management assignment.  
The React client (frontend UI) is hosted in a separate GitHub repository — [React Client Repository](https://github.com/amitkarol/Product-management-react.git)

## System Requirements

To run the server locally, please ensure the following is installed:

- **Node.js v18+** (or any newer version)


## 1. How to Run the Server

You can set up the project in two possible ways:

### Option 1 - Clone the Repository (requires git)
If Git is **installed** on your machine, you may use:

```bash
git clone https://github.com/amitkarol/Product-management-server.git
cd Product-management-server
```

### Option 2 — Download ZIP (Git not required)

If Git is **not installed**, you can download the project as a ZIP:

1. Go to the repository page 

2. Click **Code → Download ZIP**

3. Extract the folder

4. Open the extracted folder in your terminal

## 2. Install Dependencies
```bash
npm install
```

## 3. Start the server
```bash
npm start
```
the server will run at http://localhost:8000

## MongoDB Information

The MongoDB Atlas connection is *already fully configured* in the project via the included `.env` file.

**I am fully aware that in real-world projects `.env` files should never be committed to Git**, as they contain sensitive credentials and should be kept private.  
However, **for the purpose of this assignment**, the `.env` file is intentionally included so you can easily run the server and verify the database functionality without any additional setup.

This project uses a **MongoDB Atlas cloud database**, so no local MongoDB installation is required.

For verification purposes:
- **Database name:** `productsManagement`
- **Collection name:** `products`

Once the server starts, it will automatically connect to the Atlas database using the supplied credentials.


## API Endpoints
All backend routes are automatically prefixed with `/api` as defined in the server configuration.

| Method | Endpoint                       | Description                |
|--------|--------------------------------|----------------------------|
| GET    | `/api/products`                | Fetch all products         |
| POST   | `/api/products`                | Create a new product       |
| PATCH  | `/api/products/:productNumber` | Update an existing product |
| DELETE | `/api/products/:productNumber` | Delete a product           |
| GET    | `/api/products/:productNumber` | Fetch a product            |

## React Client Source Code
The full source code of the React client is available here:
[React Client Repository](https://github.com/amitkarol/Product-management-react.git)

## Notes for Reviewers
- Backend communicates with MongoDB Atlas using Mongoose.
- Full CRUD operations implemented.
- The UI includes modals, validation, search, toast notifications, and confirmation dialogs.
- The React production build is already included with the server so the system works immediately after npm start.