const express = require('express');
const app = express();
const usersRouter = require('./Routes/user');

app.use('/users', usersRouter);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
