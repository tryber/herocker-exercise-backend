require('dotenv').config();

const { DB_USER, DB_PASSWORD, HOST, DATABASE, DB_PORT } = process.env;
console.log(HOST);
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};