const { DataTypes } = require('sequelize');
const Sequelize = require("sequelize");
const CON = require("./constants");
const users_rolesModel = (sequelize) => {
  return sequelize.define(CON.MODEL,
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      invite_data: {
        type: Sequelize.STRING,
        allowNull: true
      }
    },
  );
};
module.exports = users_rolesModel;