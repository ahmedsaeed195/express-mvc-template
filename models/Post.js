const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Post = sequelize.define('posts', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
})

module.exports = Post