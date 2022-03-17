const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

var corsOptions = {
  origin: 'db.edvhklrmxfcucohyylun.supabase.co',
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/users', cors(corsOptions), rescue(UserController));
app.use(errorMiddleware);

module.exports = app;
