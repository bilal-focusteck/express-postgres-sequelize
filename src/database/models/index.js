'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const Sequelize = require('sequelize');
const { DB, DB_PORT, HOST, USER, PASSWORD, dialect, pool } = require("../../dbConfig/config.js");
const config = require(__dirname + '/../config/config.js')[env];


const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: dialect,
  operatorsAliases: false,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

// Test the database connection
const dbConnection = async () => {
  try {
    console.log("Trying DB Connection...")
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Error in connecting database.", error);
    process.exit(1);
  }
}
dbConnection();

// Load models dynamically from allModels.js
const db = {};
const allModels = require("./allModels").allModels;

allModels.forEach(model => {
  // const modelDefinition = require(model);
  const modelInstance = model(sequelize);
  db[modelInstance.name] = modelInstance;
});

// Associate models if associations are defined
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add sequelize and Sequelize instances to the exported object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object and the connection function
module.exports = { db, dbConnection };
