import { sign } from '../utils/jwt_config';
import { compareSync } from 'bcrypt';
import sendError from '../utils/send_error';
import { Users } from '../models';
const User = Users;

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

export function getAllUsers(req, res, next) {
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

function authenticate(password, hash) {
    return compareSync(password, hash, (err, same) => {
        // console.log(`same is ${same}`);
        if (same) {
            return same;
        } else {
            return err;
        }
    });
}

// Web Panel Login
export function loginAdmin(req, res, next) {
    // console.log(req.body);
    if (!req.body.email) {
        return sendError(res, "Email does not exist");
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user && (user.userTypeId == userTypeAdmin || user.userTypeId == userTypeOrg)) {
            let token;
            let match = authenticate(req.body.password, user.password);
            // console.log(`match is ${match}`);
            if (match) {
                token = sign({
                    id: user.id
                });
                return res.status(200).json({
                    message: "Authentication success",
                    token: token,
                    status: true
                });
            } else {
                return res.status(401).json({
                    message: "Authentication failure",
                    status: false
                })
            }
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
export function login(req, res, next) {
    console.log("Login works");
}

// Android Signup
export function signUp(req, res, next) {
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
        }).then(() => {
            // redirect to login page
            res.redirect('/login');
        }).catch(err => sendError(res, err, ));

    }

}