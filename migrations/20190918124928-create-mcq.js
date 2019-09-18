'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MCQs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Q1: {
        type: Sequelize.STRING
      },
      Q2: {
        type: Sequelize.STRING
      },
      Q3: {
        type: Sequelize.STRING
      },
      A1: {
        type: Sequelize.STRING
      },
      A2: {
        type: Sequelize.STRING
      },
      A3: {
        type: Sequelize.STRING
      },
      A1O1: {
        type: Sequelize.STRING
      },
      A1O2: {
        type: Sequelize.STRING
      },
      A2O1: {
        type: Sequelize.STRING
      },
      A2O2: {
        type: Sequelize.STRING
      },
      A3O1: {
        type: Sequelize.STRING
      },
      A3O2: {
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MCQs');
  }
};