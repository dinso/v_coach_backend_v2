const mysql = require("mysql2");

// const db = mysql.createConnection({
//     connectionLimit: 10;
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "video_coaching",
// });

// db.connect(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(" DB Connected ");
//     }
// });

const Sequelize = require('sequelize');

const sequelize = new Sequelize('video_coaching', 'dinso', 'rootroot0',{
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize;