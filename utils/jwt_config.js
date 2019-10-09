const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports={
sign: payload => {
  let signOptions = {
    algorithm: 'HS256',
    expiresIn: '5h'
  };
  return jwt.sign(payload, config.secret, signOptions);
},
verify: token => {
  let verifyOptions= {
    algorithm: 'HS256',
    expiresIn: '5h'
  };
  try{
    return jwt.verify(token,config.secret,verifyOptions);
  }catch(err){
    // console.log(`error starts with :${err}`);   
    return false;
  }
}
};