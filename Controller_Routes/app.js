const express = require('express');
const app = express();
const userRoutes = require('./Routes/user');

// app.use(express.json()); // for req.body
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
