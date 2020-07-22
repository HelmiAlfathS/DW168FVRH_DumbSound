'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        fullName: 'Admin',
        email: 'helmi@gmail.com',
        password: 'admin123',
        gender: 'male',
        phone: '082122223333',
        address: 'jln. admin',
        role: 1,
        subscribe: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: 'Helmi Alfath',
        email: 'helmi@gmail.com',
        password: '123456a',
        gender: 'male',
        phone: '082122223333',
        address: 'jln. ninjaku',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
