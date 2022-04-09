const Sequelize = require('sequelize');

const DB_NAME = process.env.POSTGRES_DB;
const DB_USERNAME = process.env.POSTGRES_USER;
const DB_PASSWORD = process.env.POSTGRES_PASSWORD;
const DB_HOST = process.env.POSTGRES_HOST;
const PORT = process.env.POSTGRES_PORT

const options = {
  host: DB_HOST || "postgres",
  dialect: 'postgres',
  port: PORT || 5432,
  logging: console.log,
};

const sequelize = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  options,
);

module.exports = sequelize;
