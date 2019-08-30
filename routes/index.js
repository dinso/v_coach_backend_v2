const express = require('express');
const app = express();

// let router = express.Router();

app.get("/",(req,res)=> res.json({message: "index route of the app is working"}));

module.exports = app;