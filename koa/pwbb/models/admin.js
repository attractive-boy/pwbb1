// models/admin.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 数据库连接

class Admin extends Model {}

Admin.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Admin',
  tableName: 'admins', // 表名
  timestamps: true // 创建和更新时间戳
});

module.exports = Admin;
