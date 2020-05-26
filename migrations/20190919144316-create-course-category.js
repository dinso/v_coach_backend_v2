'use strict';
export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('CourseCategories', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        containsVideo: {
            type: Sequelize.TINYINT
        },
        parentCourseCategoryId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'CourseCategories',
                key: 'id'
            }
        },
        organizationId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Organizations',
                key: 'id'
            }
        },
        videoId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Videos',
                key: 'id'
            }
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        deletedAt: {
            type: Sequelize.DATE
        }
    });
}
export function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('CourseCategories');
}