const Sequelize = require('sequelize');
const sequelize = require('../db'); // 数据库连接
const User = require('../models/user'); // 引入 User 模型
const UserVoice = require('../models/UserVoice'); // 引入 UserVoice 模型

const processVoiceData = async () => {
  try {
    // Step 1: 从数据库中读取用户的 voice 字段
    const users = await User.findAll({
      where: {
        voice: {
          [Sequelize.Op.ne]: null
        }
      }
    });

    // Step 2: 清理和处理数据
    const cleanedData = users.map(user => {
      let voiceData = user.voice;

      // 处理 voice 字段的 JSON 数据
      if (typeof voiceData === 'string') {
        voiceData = voiceData.replace(/\\\\/g, '\\').replace(/\\"/g, '"');
        try {
          voiceData = JSON.parse(voiceData);
        } catch (error) {
          console.error(`Error parsing JSON for user ${user.id}:`, error);
          return null;
        }
      }

      return {
        user_id: user.id,
        voice_url: voiceData.url || null,
        voice_len: voiceData.len || null,
        voice_translate: voiceData.voiceTranslate || null,
      };
    }).filter(data => data !== null); // 过滤掉无效数据

    // Step 3: 插入清理后的数据到 user_voices 表
    if (cleanedData.length > 0) {
      await UserVoice.bulkCreate(cleanedData, { validate: true });
      console.log('Data processed and inserted successfully.');
    } else {
      console.log('No valid data to insert.');
    }
  } catch (error) {
    console.error('Error processing data:', error);
  }
};

// 执行处理
processVoiceData();
