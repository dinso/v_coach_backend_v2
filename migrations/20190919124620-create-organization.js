'use strict';
export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Organizations', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        label: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
}
export function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Organizations');
}