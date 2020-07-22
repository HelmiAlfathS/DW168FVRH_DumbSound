'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    'Song',
    {
      title: DataTypes.STRING,
      year: DataTypes.INTEGER,
      artistId: DataTypes.INTEGER,
      musicThumbnail: DataTypes.STRING,
      linkMusic: DataTypes.STRING,
    },
    {}
  );
  Song.associate = function (models) {
    Song.belongsTo(models.Artist, {
      // as: 'artist',
      foreignKey: {
        name: 'artistId',
      },
    });
  };
  return Song;
};
