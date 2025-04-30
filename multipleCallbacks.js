const express = require('express');
const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next(); // pass control to the next function
}

function auth(req, res, next) {
  const authorized = false; // Replace with real auth logic
  if (authorized) {
    next(); // allow access
  } else {
    res.status(403).send('Forbidden');
  }
}

function handler(req, res) {
  res.send('Hello from the final handler!');
}

app.get('/secure', logger, auth, handler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
