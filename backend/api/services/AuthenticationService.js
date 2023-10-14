const jwt = require('jsonwebtoken');
const secret = '$2y$19$nu8V9E8ViSTJylkvARz.Rubzzu9w1wBG3UPNi8opt6FnRvBuTiUwq';

const JWTIssuer = (payload, expiresIn) => {
  return jwt.sign(payload, secret, {expiresIn});
};
const JWTVerify = (token) => {
  return jwt.verify(token, secret);
};

module.exports = {
  JWTIssuer,
  JWTVerify
};
