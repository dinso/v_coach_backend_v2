'use strict';
export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Videos', {
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
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mcqId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'MCQs',
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
        }
    });
}
export function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Videos');
}