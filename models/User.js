const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Users = sequelize.define('users', {
  // Model attributes are defined here
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
})

module.exports = Users