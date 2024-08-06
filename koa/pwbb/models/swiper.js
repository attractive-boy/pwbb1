const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例

const Swiper = sequelize.define('Swiper', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  thumb: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  page_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  modular: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'swiper'
});

module.exports = Swiper;