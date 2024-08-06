// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pwbb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true, // 启用日志
  });

module.exports = sequelize;
