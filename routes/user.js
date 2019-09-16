const express = require('express');
const app = express();

const route = express.Router();

const user = require('../controllers/user');

route.get('/getAllUsers',user.getAllUsers);

module.exports = route;