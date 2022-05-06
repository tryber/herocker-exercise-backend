const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/users', rescue(UserController));

app.use(errorMiddleware); 

module.exports = app;
