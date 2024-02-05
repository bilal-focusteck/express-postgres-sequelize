const { DataTypes } = require('sequelize');
const Sequelize = require("sequelize");
const CON = require("./constants");
const rolesModel = (sequelize) => {
  return sequelize.define(CON.MODEL,
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
  );
};
module.exports = rolesModel;