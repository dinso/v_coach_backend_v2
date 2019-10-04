'use strict';
const bcrypt = require('bcrypt');
var hashedPass=null;
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
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
        len: [4, 255]
      }
    },
    mobile: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 15],
        isNumeric: {
          msg: "Invalid Mobile Number"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
      set(email) {
        this.setDataValue("email", email.toString().toLowerCase());
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue("password", bcrypt.hashSync(password, 10));
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.UserType, {
      foreignKey: {
        name: "userTypeId",
        allowNull: false
      }
    });
    User.belongsTo(models.Qualification, {
      foreignKey: {
        name: "qualificationId",
        allowNull: false
      }
    });
    User.belongsTo(models.Organization, {
      foreignKey: "organizationId",
      allowNull: false
    });
  };
  // User.beforeCreate(user => {
  //   console.log(`user is : ${JSON.stringify(user)}`);
  //   if(user.password!=""){
  //     bcrypt.hash(user.password,10).then(hash => {
  //       user.password = hash;
  //       console.log(hash);
  //     });
  //   }
  // });

  return User;
};