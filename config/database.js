const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tutorial-project-express', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize