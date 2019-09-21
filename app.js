const express = require("express");
const app = express();
// const morgan = require("morgan");
const bodyParser = require("body-parser");

const config = require('./config/config');
const dotenv = require('dotenv');

const port = process.env.PORT || "5600";
const IP = process.env.IP || "127.0.0.1";

const sequelize = require('./utils/db_conn');

const indexRoutes = require("./routes/index");
const userRoutes = require('./routes/user');

var colors = require("colors");

// morgan for request log in console
// app.use(morgan("dev"));

// body parser to format data in urlencoded or json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use((req, res, next) => {
//     // To any client
res.header("Access-Control-Allow-Origin", "*"); // * for all to access this api

//     // Which type of headers;
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
);

//     // Which kind of Methods allowed
//     // Browser will send options if its PUT, POST request
// if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({}); // json data load or payload
// }
    next(); // For other routes to take over
});

app.use("/", indexRoutes);

// 404 page
app.use((req, res, next) => {
    res.status(400).json("Page Not Found");
});

// DB Connection

sequelize.sync({force:false}).then(result => {
    // console.log(result);
    app.listen(port, IP, function () {
        console.log();
        console.log(colors.yellow.bold("Connected on IP  = " + IP))
        console.log(colors.yellow.bold("Connected on Port  = " + port));
        console.log();
    });
}).catch(err => {
    console.log(err);
});