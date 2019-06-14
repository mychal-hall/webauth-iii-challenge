const express = require("express");

const buildMiddleware = require("./middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/user-router.js");

const server = express();

buildMiddleware(server);

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Sentient API is online.");
});

module.exports = server;
