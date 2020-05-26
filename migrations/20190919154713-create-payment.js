'use strict';
export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Payments', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        transactionNumber: {
            type: Sequelize.STRING,
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
        courseId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'CourseCategories',
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
    });
}
export function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Payments');
}