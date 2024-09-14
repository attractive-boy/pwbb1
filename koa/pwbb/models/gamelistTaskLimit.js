const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例

class GamelistTaskLimit extends Model {}

GamelistTaskLimit.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  gamelist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'gamelist', // 参考主表名称
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  turnback_rate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  done_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  refund_rate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  task_limit_effect_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'GamelistTaskLimit',
  tableName: 'gamelist_task_limit', // 子表表名
  timestamps: false
});

module.exports = GamelistTaskLimit;
