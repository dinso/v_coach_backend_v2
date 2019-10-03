const express = require('express');
const route = express.Router();

route.use('/api', require('./user'));

// route.use('/api/admin',require('./admin'));



// login

// signup

// forgotpassword

// courses

// categories
route.get("/",(req,res)=> res.json({message: "index route of the app is working"}));

module.exports = route;