'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('songs', [
      {
        title: 'Not Affraid',
        year: 2018,
        artistId: 1,
        musicThumbnail: 'venom.jpg',
        linkMusic: 'https://soundcloud.com/eminemofficial/not-afraid-2',
      },
      {
        title: 'Decode',
        year: 2010,
        artistId: 2,
        musicThumbnail: 'decode.jpg',
        linkMusic: 'https://soundcloud.com/bandwhore-2/paramore-decode',
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
