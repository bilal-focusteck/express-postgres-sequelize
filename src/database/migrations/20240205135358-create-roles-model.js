'use strict';
const { sequelize } = require("../models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('roles', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        role_name: {
          type: Sequelize.STRING,
          allowNull: false,
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
        }
      },
      );
    } catch (error) {
      console.log("error running up migration.", error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable('roles');
    } catch (error) {
      console.log("error running down migration", error);
    }
  }
};
