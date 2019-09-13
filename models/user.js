const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../utils/db_conn');

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
    allowNull:false
  },
  dob: {
    type: Sequelize.DATE,
    allowNull:false
  },
  email: {
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      isEmail: true
    },
    set(email){
      this.setDataValue("email",email.toString().toLowerCase());
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull:false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull:false
  },
  userTypeId: {
    type: Sequelize.STRING,
    allowNull:false
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
  createdAt: {
    type: Sequelize.DATE,
    allowNull:false
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
}, {
  
},{
  instanceMethods: {
    generateHash(password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
}
);

sequelize.addHook('beforeCreate','beforeUpdate', (user, options) => {
  user.password = bcrypt.hash(user.password, 10);
})

module.exports = User;