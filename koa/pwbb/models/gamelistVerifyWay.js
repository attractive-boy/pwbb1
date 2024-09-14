// models/gamelistVerifyWay.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 引入你的 Sequelize 实例

class GamelistVerifyWay extends Model {}

GamelistVerifyWay.init({
  gamelist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'gamelist', // 主表模型名称
      key: 'id'
    }
  },
  verify_key: {
    type: DataTypes.STRING,
    allowNull: false
  },
  verify_ct: {
    type: DataTypes.STRING
  },
  verify_title: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'GamelistVerifyWay',
  tableName: 'gamelist_verify_way',
  timestamps: false
});

module.exports = GamelistVerifyWay;
