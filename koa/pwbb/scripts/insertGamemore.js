const { Sequelize } = require('sequelize');
const sequelize = require('../db'); // 数据库连接
const Gamelist = require('../models/gamelist'); // 引入 Gamelist 模型
const GamelistLv = require('../models/gamelistLv'); // 引入 GamelistLv 模型
const GamelistTaskLimit = require('../models/gamelistTaskLimit'); // 引入 GamelistTaskLimit 模型
const GamelistVerifyWay = require('../models/gamelistVerifyWay'); // 引入 GamelistVerifyWay 模型

console.log('开始迁移数据...');

const cleanJsonString = (jsonString) => {
  if (typeof jsonString === 'string') {
    return jsonString.replace(/\\\\/g, '\\')  // 替换双反斜杠
                      .replace(/\\"/g, '"')   // 替换转义的引号
                      .replace(/^[^{]*({)/, '$1'); // 保留第一个大括号及其后内容
  }
  return jsonString;
};

(async () => {
    try {
      // 获取所有 gamelist 表中的记录
      const gamelists = await Gamelist.findAll();
  
      for (const game of gamelists) {
        const { id, lv, task_limit, verifyWay } = game;
  
        // 处理 lv 字段，插入到 gamelist_lv 子表
        const cleanedLv = cleanJsonString(lv);
        console.log('lv:', cleanedLv);
        const lvData = typeof cleanedLv === 'string' ? JSON.parse(cleanedLv) : cleanedLv; // 确保 lvData 是对象
        for (const key in lvData) {
          const { lv, name, title } = lvData[key];
          if (lv !== undefined && name && title) { // 确保字段存在且不为 null
            await GamelistLv.create({
              gamelist_id: id,
              lv,
              name,
              title
            });
          } else {
            console.warn(`Skipping lv data with missing fields for game ID ${id}:`, lvData[key]);
          }
        }
  
        // 处理 task_limit 字段，插入到 gamelist_task_limit 子表
        const cleanedTaskLimit = cleanJsonString(task_limit);
        console.log('cleanedTaskLimit:', cleanedTaskLimit); // 添加调试输出
        const taskLimitData = typeof cleanedTaskLimit === 'string' ? JSON.parse(cleanedTaskLimit) : cleanedTaskLimit; // 确保 taskLimitData 是对象
  
        if (!taskLimitData) {
          console.warn(`Skipping task_limit data with invalid format for game ID ${id}:`, task_limit);
          continue;
        }
  
        await GamelistTaskLimit.create({
          gamelist_id: id,
          turnback_rate: taskLimitData.turnback_rate || 0, // 默认值处理
          done_num: taskLimitData.done_num || 0, // 默认值处理
          refund_rate: taskLimitData.refund_rate || 0, // 默认值处理
          total_num: taskLimitData.total_num || 0, // 默认值处理
          task_limit_effect_num: taskLimitData.task_limit_effect_num || 0 // 默认值处理
        });
  
        // 处理 verifyWay 字段，插入到 gamelist_verify_way 子表
        const cleanedVerifyWay = cleanJsonString(verifyWay);
        const verifyWayData = typeof cleanedVerifyWay === 'string' ? JSON.parse(cleanedVerifyWay) : cleanedVerifyWay; // 确保 verifyWayData 是对象
        for (const key in verifyWayData) {
          const { ct, title } = verifyWayData[key];
          if (ct && title) { // 确保字段存在且不为 null
            await GamelistVerifyWay.create({
              gamelist_id: id,
              verify_key: key,
              verify_ct: ct,
              verify_title: title
            });
          } else {
            console.warn(`Skipping verifyWay data with missing fields for game ID ${id}:`, verifyWayData[key]);
          }
        }
      }
  
      console.log('数据迁移成功完成。');
    } catch (error) {
      console.error('数据迁移过程中出错:', error);
    } finally {
      await sequelize.close();
    }
  })();
  