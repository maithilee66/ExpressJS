const express = require('express');
const router = express.Router();
const userController = require('C:/Users/Dell/Desktop/ExpressJS/Controller_Routes/Controller/userController.js');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
