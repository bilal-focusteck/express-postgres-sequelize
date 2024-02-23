'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('users', 'status', {
        type: Sequelize.ENUM('active', 'pending', 'deleted'),
        defaultValue: 'active',
        allowNull: false,
      });
    } catch (error) {
      console.log("error in running up migration: ", error)
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('users', 'status');
    } catch (error) {
      console.log("error in running down migration: ", error);
    }
  }
};
