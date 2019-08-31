const express = require('express');
const app = express();

let route = express.Router();

route.get("/",(req,res)=> res.json({message: "index route of the app is working"}));

module.exports = app;