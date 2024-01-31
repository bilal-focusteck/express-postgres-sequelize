require('dotenv').config()
// require('dotenv').config();
// module.exports = {
//   "development": {
//     "username": process.env.USER || "postgres",
//     "password": process.env.PASSWORD || "@fixafib",
//     "database": process.env.DB || "loyalty_db",
//     "host": process.env.HOST || "localhost",
//     "dialect": process.env.DIALECT || "postgres"
//   },
//   "test": {
//     "username": process.env.USER || "postgres",
//     "password": process.env.PASSWORD || "@fixafib",
//     "database": process.env.DB || "loyalty_db",
//     "host": process.env.HOST || "localhost",
//     "dialect": process.env.DIALECT || "postgres"
//   },
//   "production": {
//     "username": process.env.USER || "postgres",
//     "password": process.env.PASSWORD || "@fixafib",
//     "database": process.env.DB || "loyalty_db",
//     "host": process.env.HOST || "localhost",
//     "dialect": process.env.DIALECT || "postgres"
//   }
// }

module.exports = {
  PORT: process.env.PORT,
  DB_PORT: process.env.DB_PORT,
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  APP_SECRET: process.env.APP_SECRET
};
