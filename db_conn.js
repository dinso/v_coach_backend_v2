require mysql = require("mysql");

const db = mysql.createConnection({
    connectionLimit: 10;
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "video_coaching",
});

db.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log(" DB Connected ");
    }
});

module.exports = db;