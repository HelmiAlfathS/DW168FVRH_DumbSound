'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: {
        type: DataTypes.STRING,
        defaultValue: 'male',
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      subscribe: { type: DataTypes.BOOLEAN, defaultValue: false },
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {}
  );
  Users.associate = function (models) {
    Users.hasMany(models.Transaction);
  };
  return Users;
};
