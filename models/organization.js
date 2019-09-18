'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    label: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Organization.associate = function(models) {
    // associations can be defined here
  };
  return Organization;
};