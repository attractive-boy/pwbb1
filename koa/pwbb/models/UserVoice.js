const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例

class UserVoice extends Model {}

UserVoice.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // 关联的表名
      key: 'id'
    }
  },
  voice_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  voice_len: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  voice_translate: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'UserVoice',
  tableName: 'user_voices', // 设置表名
  timestamps: false // 设置为 true 如果使用 createdAt 和 updatedAt
});

module.exports = UserVoice;
