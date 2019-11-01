"use strict";

const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

module.exports = {
  generateToken: data => {
    return jwt.sign(data, SECRET);
  },
  verifyToken: token => {
    try {
      return jwt.verify(token, SECRET);
    } catch (e) {
      return false;
    }
  }
};
