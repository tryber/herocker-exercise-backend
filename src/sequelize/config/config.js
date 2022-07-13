require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const dbConfig = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
};

module.exports = {
  development: {
    ...dbConfig,
    database: 'database_development',

  },
  test: {
    ...dbConfig,
    database: 'database_test',

  },
  production: {
    ...dbConfig,
    database: 'database_test',

  },
};