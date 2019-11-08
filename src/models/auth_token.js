"use strict";
module.exports = (sequelize, DataTypes) => {
  const auth_token = sequelize.define(
    "auth_token",
    {
      token: DataTypes.STRING
    },
    {}
  );
  auth_token.associate = function(models) {
    // associations can be defined here
    auth_token.belongsTo(models.User, { foreignKey: "userId" });
  };
  return auth_token;
};
