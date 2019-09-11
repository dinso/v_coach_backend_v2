const express = require('express');
const app = express();

let router = express.Router();
let User = require('./models/user');

let attributesUser = [
  "fullname",
  "fathersFullname",
  "mobile",
  "address",
  "email",
  "password",
  "dob",
  "gender"
];
let attributesUserID = [
  "id",
  "fullname",
  "fathersFullname",
  "mobile",
  "address",
  "email",
  "password",
  "dob",
  "gender"
];

module.exports = {
  //login
  login(req,res){
    let email = req.body.email;
    let password = req.body.password;
    return User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      console.log(user," Logged In. ");
      

    })
  },
  //registerUser
  registerUser(req, res){
    let firstName = req.body.firstName;
    let middleName = req.body.middleName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let dob = req.body.dob;
    let address = req.body.address;
    let gender = req.body.gender;
  }
  //getAllUsers


};