const express = require('express');
const router = express.Router();

// GET /users - Get all users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// GET /users/:id - Get one user by ID
router.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

// POST /users - Create a new user
router.post('/', (req, res) => {
  res.send('Create new user');
});

// PUT /users/:id - Replace a user (full update)
router.put('/:id', (req, res) => {
  res.send(`Replace user with ID ${req.params.id}`);
});

// PATCH /users/:id - Update a user (partial update)
router.patch('/:id', (req, res) => {
  res.send(`Update user with ID ${req.params.id}`);
});

// DELETE /users/:id - Delete a user
router.delete('/:id', (req, res) => {
  res.send(`Delete user with ID ${req.params} `);
});

module.exports = router;
