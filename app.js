const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const http = require("http");

const port = process.env.PORT || 5000;

const db = require("./models");

const indexRouter = require("./routes/index");

var colors = require("colors");

// morgan for requrest log in console
app.use(morgan("dev"));

// body parser to format data in urlencoded or json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    // To any client
    res.header("Access-Control-Allow-Origin", "*"); // * for all to access this api

    // Which type of headers;
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    // Which kind of Methods allowed
    // Browser will send options if its PUT, POST request
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({}); // json data load or payload
    }
    next(); // For other routes to take over
});

// DB Connection

db.sequelize
    .authenticate()
    .then(function() {
        console.log("Database Authenticated....".yellow);
        // if (isCF) cf.createFields(); //forcely create all tables again0
    })
    .catch(err => {
        console.log("Database Not Authenticated.....", err);
    });

// db.sequelize.sync({force: true}).then()   // To recreate tables everytime by dropping them
db.sequelize.sync({
    force: false
}).then(function() {
    app.listen(port, "0.0.0.0", function() {
        console.log();

        console.log(colors.yellow.bold("Connected on Port  = " + port));
        console.log();
    });
});