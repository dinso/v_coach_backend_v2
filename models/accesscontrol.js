'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessControl = sequelize.define('AccessControl', {
    label: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  AccessControl.associate = function(models) {
    // associations can be defined here
    
  };
  return AccessControl;
};