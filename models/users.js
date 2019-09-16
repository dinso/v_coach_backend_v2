'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 255]
      }
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 255]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4,255]
      }
    },
    mobile: {
      type: DataTypes.STRING,
      validate:{
        len: [10,15],
        isNumeric:{
          msg:"Invalid Mobile Number"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true
      },
      set(email){
        this.setDataValue("email",email.toString().toLowerCase());
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull:false
    },
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    qualificationId: {
      type: DataTypes.INTEGER,
    },
    organizationId: {
      type: DataTypes.INTEGER,
    },
    lastLoginTime: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull:false
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};