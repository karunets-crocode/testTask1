const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teest', 'postgres', '1251247', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;