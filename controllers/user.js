const express = require('express');
const app = express();

let router = express.Router();
let User = require('./models/user');