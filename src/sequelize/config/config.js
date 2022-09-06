module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'TVRah4OgcadoFAev',
    database: 'postgres',
    host: 'db.kxppsrohqnevwcqrfuou.supabase.co',
    dialect: 'postgres',
  },
};