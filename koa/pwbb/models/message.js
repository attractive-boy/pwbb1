// models/message.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 根据你的项目结构调整路径

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    uid: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    from_uid: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_msg: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    last_time: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    is_top: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    unread: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    tnickname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tsex: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    ol_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ol_last_time: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    tuser_status: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    tableName: 'messages',
    timestamps: false
});

module.exports = Message;
