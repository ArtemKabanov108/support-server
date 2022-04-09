require('dotenv').config({});
console.log("process.env.POSTGRES_PORT", process.env.POSTGRES_HOST)
module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0,
    port: process.env.POSTGRES_PORT,
    logging: true,
  },
  db: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0,
    port: process.env.POSTGRES_PORT,
    logging: true,
  }
}