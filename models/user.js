const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true, 
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 10000,
  },
});

module.exports = User;
