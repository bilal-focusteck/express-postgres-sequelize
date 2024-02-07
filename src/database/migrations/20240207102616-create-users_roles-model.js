'use strict';
const { sequelize } = require("../models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users_roles', {
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
      await queryInterface.dropTable('users_roles');
    } catch (error) {
      console.log("error running down migration", error);
    }
  }
};
