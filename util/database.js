const Sequelize = require('sequelize');

const sequelize = new Sequelize('project', 'root', 'Shashank@143', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
