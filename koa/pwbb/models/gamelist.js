const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const GamelistLv = require('./gamelistLv'); // 子表模型 1
const GamelistTaskLimit = require('./gamelistTaskLimit'); // 子表模型 2
const GamelistVerifyWay = require('./gamelistVerifyWay');

// Define GameList model
const GameList = sequelize.define('GameList', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
  },
  device: {
    type: DataTypes.STRING,
  },
  indexShow: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  keyWord: {
    type: DataTypes.TEXT,
  },
  summaryTips: {
    type: DataTypes.TEXT,
  },
  taskPs: {
    type: DataTypes.TEXT,
  },
  noAddition: {
    type: DataTypes.INTEGER,
  },
  hide: {
    type: DataTypes.INTEGER,
  },
  lv: {
    type: DataTypes.JSON,
  },
  verifyWay: {
    type: DataTypes.JSON,
  },
  backImage: {
    type: DataTypes.TEXT,
  },
  session_reset_time: {
    type: DataTypes.INTEGER,
  },
  round_price_switch: {
    type: DataTypes.INTEGER,
  },
  default_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  exchange_ratio: {
    type: DataTypes.DECIMAL(10, 2),
  },
  round_time: {
    type: DataTypes.INTEGER,
  },
  admin_comment_switch: {
    type: DataTypes.INTEGER,
  },
  task_limit: {
    type: DataTypes.INTEGER,
  },
  task_limit_role: {
    type: DataTypes.JSON,
  },
  rank_example_img: {
    type: DataTypes.TEXT,
  },
  rank_example_video: {
    type: DataTypes.TEXT,
  },
  mini_top: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
}, {
  tableName: 'GameList',
  timestamps: false,
});
GameList.hasMany(GamelistLv, { foreignKey: 'gamelist_id' });
GameList.hasMany(GamelistTaskLimit, { foreignKey: 'gamelist_id' });
GameList.hasMany(GamelistVerifyWay, { foreignKey: 'gamelist_id' });

GamelistLv.belongsTo(GameList, { foreignKey: 'gamelist_id' });
GamelistTaskLimit.belongsTo(GameList, { foreignKey: 'gamelist_id' });
GamelistVerifyWay.belongsTo(GameList, { foreignKey: 'gamelist_id' });

module.exports = GameList;
