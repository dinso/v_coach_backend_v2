'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    label: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
    Video.BelongsTo(models.MCQ, {
      foreignKey: {
        name: "mcqId",
        allowNull: true
      }
    });
  };
  return Video;
};