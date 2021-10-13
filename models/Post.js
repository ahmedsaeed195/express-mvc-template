const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Post = sequelize.define('posts', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
})

module.exports = Post