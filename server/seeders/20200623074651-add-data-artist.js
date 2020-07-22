'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', [
      {
        name: 'Eminem',
        old: 45,
        categoryId: 1,
        carrerStart: 1990,
      },
      {
        name: 'Paramore',
        old: 15,
        categoryId: 2,
        carrerStart: 2005,
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
