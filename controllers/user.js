const express = require('express');
const app = express();

let router = express.Router();
let User = require('../models/user');

let attributesUser = [
  "firstName",
  "middleName",
  "lastName",
  "mobile",
  "address",
  "email",
  "password",
  "dob",
  "gender"
];
let attributesUserID = [
  "id",
  "firstName",
  "middleName",
  "lastName",
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
  },
  //getAllUsers
  getAllUsers(req, res){
    return User.findAll({
      // attributes: attributesUserID,
      // include: [{ model: Qualification, attributes: ["label"] }]
      // limit : 10
    }).then(user => {
      return res.status(200).json({
        data: user
      })
    })
  }

};