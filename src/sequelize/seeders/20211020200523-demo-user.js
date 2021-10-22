module.exports = {
  up: (queryInterface, _Sequelize) => queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Leandro',
      lastName: 'Karnal',
      email: 'leandro.karnal@bol.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Brené',
      lastName: 'Brown',
      email: 'brene.brown@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]),
  down: (queryInterface, _Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};