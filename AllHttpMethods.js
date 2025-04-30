const express = require('express');
const app = express();
const port = 3000;

// app.use(express.json());  // Middleware to parse JSON request bodies

let users = [];  // In-memory "database"

// POST - Create a new user
app.post('/users', (req, res) => {
  res.send("psot method is working ");
});

// PUT - Update an existing user by ID
app.put('/users/:id', (req, res) => {
    res.send("put method is working ");

});

// PATCH - Partially update an existing user by ID
app.patch('/users/:id', (req, res) => {
    res.send("patch method is working ");

});

// DELETE - Delete an existing user by ID
app.delete('/users/:id', (req, res) => {
    res.send("delete method is working ");

});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
