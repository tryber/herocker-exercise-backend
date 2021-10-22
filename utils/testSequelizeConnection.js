const Sequelize = require('sequelize');
const configToTest = require('../src/sequelize/config/config').development;

const sequelize = new Sequelize(configToTest);

sequelize
    .authenticate()
    .then(() => console.log('Conexão foi estabelecida com sucesso.'))
    .catch((err) => console.log('Não foi possível conectar com o banco de dados: \n', err));
