'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction',
    {
      startDate: { type: DataTypes.DATEONLY, defaultValue: new Date() },
      dueDate: DataTypes.DATEONLY,
      userId: DataTypes.NUMBER,
      attachement: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM('approved', 'cancel', 'pending'),
        defaultValue: 'pending',
      },
    },
    {}
  );
  Transaction.associate = function (models) {
    Transaction.belongsTo(models.Users, {
      foreignKey: 'userId',
      // as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return Transaction;
};
