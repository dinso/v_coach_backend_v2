const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../util/db_conn');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoncrement: true,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 255]
    }
  },
  middleName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 255]
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4,255]
    }
  },
  mobile: {
    type: Sequelize.INTEGER,
    validate:{
      len: [10,15],
      isNumeric:{
        msg:"Invalid Mobile Number"
      }
    }
  },
  address: {
    type: Sequelize.STRING,
  },
  dob: {
    type: Sequelize.DATE,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  userTypeId: {
    type: Sequelize.STRING,
  },
  qualificationId: {
    type: Sequelize.STRING,
  },
  organizationId: {
    type: Sequelize.STRING,
  },
  lastLoginTime: {
    type: Sequelize.DATE,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  deletedAt: {
    type: Sequelize.DATE,
    allowNull:true
  },
}, {
  instanceMethods: {
    generateHash(password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
});

module.exports = User;