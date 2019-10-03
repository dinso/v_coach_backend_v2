const express = require('express');
const route = express.Router();
const auth = require('../middleware/auth');

const controllers = require('../controllers');
const userController = controllers.user;

route.post('/loginAdmin',userController.loginAdmin);

route.get('/getAllUsers',auth,userController.getAllUsers);

module.exports = route;