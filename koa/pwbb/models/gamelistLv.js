const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例

class GamelistLv extends Model {}

GamelistLv.init({
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
  lv: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'GamelistLv',
  tableName: 'gamelist_lv', // 子表表名
  timestamps: false
});

module.exports = GamelistLv;
