const jwt = require('jsonwebtoken');
const jwtConfig = require('../utils/jwt_config');

const getTokenFromHeaders = req => {
  const {
    headers: { authorization }
  } = req;

  if (authorization && authorization.split(" ")[0] === "Token") {
    return authorization.split(" ")[1];
  }
  return null;
};

const verify = function(req, res, next) {
  let token = getTokenFromHeaders(req);

  if (token) {
    req.user = jwtConfig.verify(token);
    // console.log(req.user);
    let user = req.user;

    if (!user || !user.id || user.id <= 0) {
      res.status(401).send({ message: "Not authorized.", status: false });
      return;
    }
    next();
  } else {
    res
      .status(401)
      .send({ message: "Not authorization token found.", status: false });
    return;
  }
};

module.exports = verify;
