const jwtConfig = require('../utils/jwt_config');
const bcrypt = require('bcrypt');
const sendError = require('../utils/send_error');
const models = require('../models');
const User = models.Users;

const userTypeAdmin = 1,
  userTypeOrg = 2,
  userTypeAndroid = 3;

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

exports.getAllUsers = (req, res, next) => {
  User.findAll({
    attributes: attributesUser
    // include: [{ model: Qualification, attributes: ["label"] }]
    // limit : 10
  }).then(users => {
    // console.log(users);
    res.status(200).json({
      data: users
    });
  });
}

// Web Panel Login
exports.loginAdmin = (req, res, next) => {
  // console.log(req.body);
  if (!req.body.email) {
    return sendError(res, "Email does not exist");
  }
  User.findOne({
    where: {
      email: req.body.email,
    }
  }).then(user => {
    if (user && (user.userTypeId == userTypeAdmin || user.userTypeId == userTypeOrg)) {
      // console.log(`User is : ${JSON.stringify(user)}`);
      let token = jwtConfig.sign({
        id: req.body.id
      });
      return res.status(200).json({
        message: "User Present",
        token: token
      });
    } else if (user.userTypeId != userTypeAdmin || user.userTypeId != userTypeOrg) {
      sendError(res, "Unauthorized Access");
    } else {
      sendError(res, "User doesn't exist");
    }
  }).catch(err => {
    sendError(res, "wrong input");
  });
}

// Android Login
exports.login = (req, res, next) => {
  
}

exports.signUp = (req, res, next) => {
  let signupData = {
    'firstName': req.body.firstName,
    'middleName': req.body.middleName,
    'lastName': req.body.lastName,
    'mobile': req.body.mobile,
    'address': req.body.address,
    'dob': req.body.dob,
    'email': req.body.email,
    'password': req.body.password,
    'gender': req.body.gender,
    'isDisabled': 0,
    'createdAt': new Date,
    'updatedAt': new Date,
    'userTypeId': 3,
    'qualificationId': req.body.qualificationId,
    'organizationId': req.body.organizationId
  };

  if (!signupData.firstName || !signupData.lastName || !signupData.mobile ||
    !signupData.password || !signupData.qualificationId || !signupData.organizationId) {
    return res.status(400).json({
      message: "Some important inputs are blank",
      status: false
    });
  } else {
      User.create(signupData).then(res => {
        return res.status(200).json({
          message: "User successfully signed up",
          status: true
        });
      }).catch(err => sendError(res, err, ));

  }

}