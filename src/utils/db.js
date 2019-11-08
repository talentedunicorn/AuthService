"use strict";

const bcrypt = require("bcrypt");
const User = require("../models").User;
const Token = require("../models").auth_token;

module.exports = {
  authenticateUser: (username, password) => {
    return User.findOne({
      attributes: ["id", "email", "fullName", "password"],
      where: {
        email: username
      }
    }).then(data => {
      const isPasswordValid = bcrypt.compareSync(
        password,
        data.dataValues.password
      );

      return new Promise((resolve, reject) => {
        if (!isPasswordValid) reject();

        resolve({
          id: data.dataValues.id,
          email: data.dataValues.email,
          fullName: data.dataValues.fullName
        });
      });
    });
  },
  saveToken: (token, userId) =>
    Token.create({
      token,
      userId
    }).catch(e => console.log(e)),
  findToken: token =>
    Token.findAll({
      where: {
        token
      }
    }),
  deleteUserTokens: userId =>
    Token.destroy({
      where: {
        userId
      }
    }),
  deleteToken: token =>
    Token.destroy({
      where: {
        token
      }
    })
};
