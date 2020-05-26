'use strict';
export default (sequelize, DataTypes) => {
    const CourseCategory = sequelize.define('CourseCategory', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        containsVideo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: DataTypes.DATE,
    }, {});
    CourseCategory.associate = function(models) {
        // associations can be defined here
        CourseCategory.belongsTo(models.CourseCategory, {
            foreignKey: {
                name: "parentCourseCategoryID",
                allowNull: true //sub category rows will not have video so they will be null
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
                allowNull: true //sub category rows will not have video so they will be null
            }
        });
    };
    return CourseCategory;
};