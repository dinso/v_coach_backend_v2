const express = require('express');
const app = express();

const user = require('/controllers/user');

let route = express.Router();

route.get("/getAllUsers", (req,res) => {
  let users;
  
});

// login

// signup

// forgotpassword

// courses

// categories
route.get("/",(req,res)=> res.json({message: "index route of the app is working"}));

module.exports = app;