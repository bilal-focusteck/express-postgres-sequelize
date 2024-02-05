const { DataTypes } = require('sequelize');
const Sequelize = require("sequelize");
const CON = require("./constants");
const userModel = (sequelize) => {
  return sequelize.define(CON.MODEL,
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      phone_no: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zip: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hashedPassword: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "destroyTime",
    });
};
module.exports = userModel;