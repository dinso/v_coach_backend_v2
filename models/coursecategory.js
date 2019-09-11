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
    deletedAt: DataTypes.DATE
  }, {});
  CourseCategory.associate = function(models) {
    // associations can be defined here
    CourseCategory.belongsTo(models.CourseCategory, {
      foreignKey: { 
        name: "parentCourseCategoryID ",
        allowNull:true
      }
    });
    // CourseCategory.belongsTo(models.AccessControl, {
    //   foreignKey: {
    //     name: "accessControlID",
    //     allowNull: false
    //   }
    // });
  };
  return CourseCategory;
};