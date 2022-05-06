require('dotenv').config();

const { HOST, PASSWORD, DATABASE, USERNAME, PORT } = process.env;

module.exports = {
  development: {
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'postgres',
  },
  test: {
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'postgres',
  },
  production: {
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'postgres',
  },
};