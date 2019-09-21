'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    transactionNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull:false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
    Payment.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
    Payment.belongsTo(models.CourseCategory, {
      foreignKey: {
        name: "courseId",
        allowNull: false
      }
    });
  };
  return Payment;
};