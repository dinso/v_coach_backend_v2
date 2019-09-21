'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middleName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userTypeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'UserTypes',
          key: 'id'
        }
      },
      qualificationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'Qualifications',
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
      isDisabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      lastLoginTime: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    }).catch(err => {
      console.log(err);
    });
    // .then(()=>{
    //   return queryInterface.addColumn(
    //     'Users',
    //     'userTypeId',
    //     {
    //       type: Sequelize.INTEGER,
    //       references: {
    //         model: 'UserType',
    //         key: 'id'
    //       },
    //       onUpdate: 'CASCADE',
    //       onDelete: 'SET NULL'
    //     },
    //   );
    // });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users').then(() => {
      return queryInterface.removeColumn(
        'Users',
        'userTypeId'
      );
    });
  }
};