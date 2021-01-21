const Sequelize = require('sequelize');
module.exports = new  Sequelize('gigsdb', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

