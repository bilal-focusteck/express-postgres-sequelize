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
      roleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "roles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
  );
};
module.exports = users_rolesModel;