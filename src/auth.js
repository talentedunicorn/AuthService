"use strict";

const dbService = require("./utils/db");
const JWT = require("./utils/jwt");

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).send();
  }

  // Contact DB and verify user
  dbService
    .authenticateUser(username, password)
    .then(user => {
      const token = JWT.generateToken(user);
      return res.status(200).send({ data: { token } });
    })
    .catch(e => {
      return res.status(401).send({ message: "Invalid credentials" });
    });
};
