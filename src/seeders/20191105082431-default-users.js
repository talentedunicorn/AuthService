"use strict";
const bcrypt = require("bcrypt");

const hashedPassword = password => bcrypt.hashSync(password, 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Valid User",
          email: "valid@mail.com",
          password: hashedPassword("p@s5w0rD"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: "Another User",
          email: "user@example.com",
          password: hashedPassword("wordpass"),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
