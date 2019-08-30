const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../util/db_conn');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoncrement: true,
    allowNul: false,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.STRING,

  },
  fatherName: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.INTEGER,
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