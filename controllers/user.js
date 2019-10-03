const jwtConfig = require('../utils/jwt_config');
const sendError = require('../utils/send_error');
const models = require('../models');
const User = models.Users;

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

// module.exports = {
//   //login
//   login(req,res){
//     let email = req.body.email;
//     let password = req.body.password;
//     return User.findOne({
//       where: {
//         email: email
//       }
//     }).then(user => {
//       console.log(user," Logged In. ");
      

//     })
//   },
//   //registerUser
//   registerUser(req, res){
//     let firstName = req.body.firstName;
//     let middleName = req.body.middleName;
//     let lastName = req.body.lastName;
//     let email = req.body.email;
//     let password = req.body.password;
//     let mobile = req.body.mobile;
//     let dob = req.body.dob;
//     let address = req.body.address;
//     let gender = req.body.gender;
//   },
//   //getAllUsers
//   getAllUsers(req, res){
//     console.log(User);
//     return User.findAll({
//       attributes: attributesUser
//       // include: [{ model: Qualification, attributes: ["label"] }]
//       // limit : 10
//     }).then(users => {
//       console.log(users);
//       return res.status(200).json({
//         data: users
//       })
//     })
//   },
//   getUser(req,res){
//     return User.findOne({
//       where : {
//         id: req.user.id
//       },

//     })
//   }

// };

exports.getAllUsers = (req,res,next) => {
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

exports.loginAdmin = (req,res,next) => {
  console.log(req.body);
  if(!req.body.email){
    return sendError(res, "Email does not exist");
  }
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
      if(user){
        let token = jwtConfig.sign({
          id: req.body.id
        });
        return res.status(200).json({
          message: "User Present",
          token: token
        });
      }else{
        return res.status(401).json({
          message: "User doesn't exist"
        });
      }
    });
}
