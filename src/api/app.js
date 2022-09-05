const express = require('express');
const rescue = require('express-rescue');
var cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(cors());

app.get('/users', rescue(UserController));

app.use(errorMiddleware); 

module.exports = app;
