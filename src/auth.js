"use strict";

const dbService = require("./utils/db");
const {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken
} = require("./utils/jwt");

module.exports = {
  login: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      res.status(400).send();
    }

    // Contact DB and verify user
    dbService
      .authenticateUser(username, password)
      .then(user => {
        const token = generateToken(user);
        const refreshToken = generateRefreshToken(user);
        // Save refresh token to database
        return dbService
          .saveToken(refreshToken)
          .then(_ => res.status(200).send({ data: { token, refreshToken } }))
          .catch(e => res.status(500).send({ data: e }));
      })
      .catch(e => {
        return res.status(401).send({ message: "Invalid credentials" });
      });
  },
  refreshToken: (req, res) => {
    const token = req.body.token;
    dbService
      .findToken(token)
      .then(({ token }) => {
        // Get data from refresh token. In this case username. Avoid passing the whole thing
        const data = verifyRefreshToken(token);
        const newToken = generateToken({ username: data.username });
        res.status(200).send({ data: { token: newToken } });
      })
      .catch(e => res.status(401).send({ data: "Invalid token", error: e }));
  }
};
