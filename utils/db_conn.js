import mysql from "mysql2";
const ENV = process.env.NODE_ENV || 'development';
import config, { development, database, username, password, host as _host } from '../config/config';
config = development;
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

import Sequelize from 'sequelize';
console.log(ENV);
console.log(config);
const sequelize = new Sequelize(database, username, password, {
    dialect: 'mysql',
    host: _host
})
export default sequelize;