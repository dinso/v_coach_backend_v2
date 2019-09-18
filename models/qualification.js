'use strict';
module.exports = (sequelize, DataTypes) => {
  const Qualification = sequelize.define('Qualification', {
    label: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Qualification.associate = function(models) {
    // associations can be defined here
  };
  return Qualification;
};