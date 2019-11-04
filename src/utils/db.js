"use strict";
const initOptions = {};

const pgp = require("pg-promise")(initOptions);
const db = pgp(process.env.DATABASE_STRING);

module.exports = {
  authenticateUser: (username, password) =>
    db.one(
      "SELECT username FROM users WHERE username = $1 AND password = crypt($2, password)",
      [username, password]
    ),
  saveToken: token =>
    db.none("INSERT INTO refreshtokens (token) VALUES($1)", [token]),
  findToken: token =>
    db.one("SELECT token FROM refreshtokens WHERE token = $1", [token])
};
