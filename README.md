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

## How to Run the Server

Follow these steps to run the backend locally:

### Clone the repository
```bash
git clone https://github.com/amitkarol/Product-management-server.git
cd Product-management-server
```
## Install Dependencies
```bash
npm install
```

## Start the server
```bash
npm dev start
```
the server will run on http://localhost:8000

## MongoDB Information
- DataBase name: productsManagement
- Collection name: products
- The database is pre-configuerd to accept external connections

