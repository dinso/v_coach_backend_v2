const mysql = require("mysql2");
const ENV = process.env.NODE_ENV || 'development';
let config = require('../config/config');
config = config.development;
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
console.log(ENV);
console.log(config);
const sequelize = new Sequelize(config.database, config.username, config.password,{
    dialect: 'mysql',
    host: config.host
})
module.exports = sequelize;