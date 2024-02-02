'use strict';
const { sequelize } = require("../models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users', {
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
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        destroyTime: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
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
    } catch (error) {
      console.log("error running up migration.", error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable('users');
    } catch (error) {
      console.log("error running down migration", error);
    }
  }
};
