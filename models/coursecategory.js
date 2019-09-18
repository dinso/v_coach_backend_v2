'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseCategory = sequelize.define('CourseCategory', {
    name: {
      type: DataTypes.STRING,
      allwoNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    containsVideo: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    parentCourseCategoryID: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
  }, {});
  CourseCategory.associate = function(models) {
    // associations can be defined here
    CourseCategory.belongsTo(models.CourseCategory, {
      foreignKey: { 
        name: "parentCourseCategoryID",
        allowNull:true      //sub category rows will not have video so they will be null
      }
    });
    CourseCategory.belongsTo(models.Organization, {
      foreignKey: {
        name: "organizationId",
        allowNull: false
      }
    });
    CourseCategory.belongsTo(models.Video, {
      foreignKey: {
        name: "videoId",
        allowNull: true     //sub category rows will not have video so they will be null
      }
    });
  };
  return CourseCategory;
};