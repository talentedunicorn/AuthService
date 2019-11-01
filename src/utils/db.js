"use strict";
const initOptions = {};

const pgp = require("pg-promise")(initOptions);
const db = pgp(process.env.DATABASE_STRING);

module.exports = {
  authenticateUser: (username, password) =>
    db.one(
      "SELECT username FROM users WHERE username = $1 AND password = crypt($2, password)",
      [username, password]
    )
};
