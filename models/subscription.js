'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    expiryTime: DataTypes.STRING,
    isCompleted: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
    Subscription.belongsTo(models.Users, {
      foreignKey: {
        name: userId,
        allowNull:false
      }
    });
    Subscription.belongsTo(models.CourseCategory, {
      foreignKey: {
        name: "courseCategoryId",
        allowNull: false
      }
    });
    Subscription.belongsTo(models.Payment, {
      foreignKey: {
        name: "paymentId",
        allowNull: false
      }
    })
  };
  return Subscription;
};