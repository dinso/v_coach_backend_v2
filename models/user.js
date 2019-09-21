'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
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
      unique: true,
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
    isDisabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    Users.belongsTo(models.UserType, {
      foreignKey: {
        name: "userTypeId",
        allowNull: false
      }
    });
    Users.belongsTo(models.Qualification, {
      foreignKey: {
        name: "qualificationId",
        allowNull: false
      }
    });
    Users.belongsTo(models.Organization, {
      foreignKey: "organizationId",
      allowNull: false
    });
  };
  return Users;
};