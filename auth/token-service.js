const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "id"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
