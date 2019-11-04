"use strict";

const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;
const EXPIRY_DURATION = process.env.TOKEN_EXPIRY || "5m";

module.exports = {
  generateToken: data => {
    return jwt.sign(data, SECRET, { expiresIn: EXPIRY_DURATION });
  },
  generateRefreshToken: data => {
    return jwt.sign(data, REFRESH_SECRET);
  },
  verifyToken: token => {
    try {
      return jwt.verify(token, SECRET);
    } catch (e) {
      return false;
    }
  },
  verifyRefreshToken: token => {
    try {
      return jwt.verify(token, REFRESH_SECRET);
    } catch (e) {
      return false;
    }
  }
};
