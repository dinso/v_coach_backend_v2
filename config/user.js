// const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// const sequelize = require('../utils/db_conn');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoncrement: true,
    allowNull: false,
    primaryKey: true
  },
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
    type: DataTypes.DATE,
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