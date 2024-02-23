require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.USER || "postgres",
    "password": process.env.PASSWORD || "bilal",
    "database": process.env.DB || "loyaltyProgram_db",
    "host": process.env.HOST || "localhost",
    "dialect": process.env.DIALECT || "postgres",
    "port": parseInt(process.env.DB_PORT) || 5432
  },
  // "development": {
  //   "username": process.env.USER || "postgres",
  //   "password": process.env.PASSWORD || "postgres",
  //   "database": process.env.DB || "loyaltyProgram_db",
  //   "host": process.env.HOST || "localhost",
  //   "dialect": process.env.DIALECT || "postgres",
  //   "port": parseInt(process.env.DB_PORT) || 5432
  // },
  "test": {
    "username": process.env.USER || "postgres",
    "password": process.env.PASSWORD || "bilal",
    "database": process.env.DB || "loyaltyProgram_db",
    "host": process.env.HOST || "localhost",
    "dialect": process.env.DIALECT || "postgres",
    "port": parseInt(process.env.DB_PORT) || 5432
  },
  "production": {
    "username": process.env.USER || "postgres",
    "password": process.env.PASSWORD || "bilal",
    "database": process.env.DB || "loyaltyProgram_db",
    "host": process.env.HOST || "localhost",
    "dialect": process.env.DIALECT || "postgres",
    "port": parseInt(process.env.DB_PORT) || 5432
  }
};