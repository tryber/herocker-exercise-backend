const Sequelize = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const configToTest = require('../src/sequelize/config/config')[env];

const sequelize = new Sequelize(configToTest);

sequelize
    .authenticate()
    .then(() => console.log('Conexão foi estabelecida com sucesso.'))
    .catch((err) => console.log('Não foi possível conectar com o banco de dados: \n', err));
