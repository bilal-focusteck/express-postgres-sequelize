require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.USER || "postgres",
    "password": process.env.PASSWORD || "@fixafib",
    "database": process.env.DB || "loyalty_db",
    "host": process.env.HOST || "localhost",
    "dialect": process.env.DIALECT || "postgres"
  },
  "test": {
    "username": process.env.USER || "postgres",
    "password": process.env.PASSWORD || "@fixafib",
    "database": process.env.DB || "loyalty_db",
    "host": process.env.HOST || "localhost",
    "dialect": process.env.DIALECT || "postgres"
  },
  "production": {
    "username": process.env.USER || "postgres",
    "password": process.env.PASSWORD || "@fixafib",
    "database": process.env.DB || "loyalty_db",
    "host": process.env.HOST || "localhost",
    "dialect": process.env.DIALECT || "postgres"
  }
};