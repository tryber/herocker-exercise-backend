const express = require('express');
require('dotenv').config();
const rescue = require('express-rescue');
const cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/users', rescue(UserController));
app.use(errorMiddleware);

module.exports = app;
