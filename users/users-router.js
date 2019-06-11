const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");
const Users = require("../users/users-model.js");

function generateToken(user) {
  return jwt.sign(
    {
      userId: user.id
    },
    secrets.jwt,
    {
      expiresIn: "1h"
    }
  );
}

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);

      res.status(201).json({
        message: `Welcome ${saved.username}!`,
        authToken: token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
