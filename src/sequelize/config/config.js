require('dotenv').config();

const { DB_USER, DB_PASSWORD, HOST, DATABASE, PORT } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'postgres',
  },
};