const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const jwt = require('jsonwebtoken')

const Users = sequelize.define('users', {
  // Model attributes are defined here
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.TEXT
  },
  isAdmin: {
    type: DataTypes.BOOLEAN
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
})

Users.prototype.generateToken = function() {
  const token = jwt.sign({ id: this.id, isAdmin: this.isAdmin }, process.env.jwtPrivateKey)
  return token
}

module.exports = Users