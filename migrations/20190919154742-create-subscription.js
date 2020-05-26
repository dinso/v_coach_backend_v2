'use strict';
export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Subscriptions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        expiryTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        isCompleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        courseCateoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'CourseCategories',
                key: 'id'
            }
        },
        videoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
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
    return queryInterface.dropTable('Subscriptions');
}