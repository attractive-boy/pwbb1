const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lv: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pct: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  voice: {
    type: DataTypes.JSON,
    allowNull: true
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  done_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  exp: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  push: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  addtime: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  idletime: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  worktime: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  offtime: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  actuid: {
    type: DataTypes.STRING,
    allowNull: true
  },
  edittime: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  acttime: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  turnback_rate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lately_turnback_rate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  group_identity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_recommend: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  recommend_expire_time: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  round_price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  admin_comment: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  admin_comment_uid: {
    type: DataTypes.STRING,
    allowNull: true
  },
  admin_comment_video: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  reject_reason: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  audit_time: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  admin_comment_level: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_busy: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  refund_rate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  refund_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users', // Adjust to your table name
  timestamps: false // Set to true if using createdAt and updatedAt
});

module.exports = User;
