"use strict";
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: uuidv4(),
        firstName: "Demo",
        lastName: "One",
        email: "demoone@gmail.com",
        age: 25,
        gender: "male",
        phone_no: "+923369607050",
        date_of_birth: "1999-01-15",
        address: "Paragon City Lahore",
        zip: "53200",
        hashedPassword: "hashedpasswordonefordemouserone",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};