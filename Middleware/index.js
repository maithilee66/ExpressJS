const express = require('express');
const app = express();

// Simple middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Simple route handler
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
