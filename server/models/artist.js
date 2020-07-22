'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    'Artist',
    {
      name: DataTypes.STRING,
      old: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      carrerStart: DataTypes.INTEGER,
    },
    {}
  );
  Artist.associate = function (models) {
    Artist.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'CASCADE',
    }),
      Artist.hasMany(models.Song, {
        as: 'song',
      });
  };
  return Artist;
};
