// scripts/insertSwipers.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例
const Swiper = require('../models/Swiper'); // 导入 Swiper 模型

const data = {
  "status": 1,
  "data": [
    {
      "id": 6,
      "name": "旭旭宝宝传媒招募主播",
      "category_id": null,
      "status": 1,
      "thumb": "lmLKsvumnU1GSdRceg6LilZFGSWE",
      "url": "article/7",
      "page_type": null,
      "priority": 11,
      "modular": "index_banner"
    },
    {
      "id": 2,
      "name": "封号规则",
      "category_id": null,
      "status": 1,
      "thumb": "FkMOYKOonFJths0K_MVV4WO2L7fM",
      "url": "article/2",
      "page_type": null,
      "priority": 10,
      "modular": "index_banner"
    },
    {
      "id": 5,
      "name": "抢单器通知",
      "category_id": null,
      "status": 1,
      "thumb": "Fi1Orze3SlkvPAZVa9XynT4HBYNf",
      "url": "article/6",
      "page_type": null,
      "priority": 6,
      "modular": "index_banner"
    },
    {
      "id": 1,
      "name": "下单功能介绍",
      "category_id": null,
      "status": 1,
      "thumb": "FrmgwVVa53xhtJbBdfJaDxx8Js7a",
      "url": "article/1",
      "page_type": null,
      "priority": 4,
      "modular": "index_banner"
    },
    {
      "id": 3,
      "name": "接单指引",
      "category_id": null,
      "status": 1,
      "thumb": "Fu7Pvsh57SNJEqZ62VOsc7_G6k8H",
      "url": "article/3",
      "page_type": null,
      "priority": 2,
      "modular": "index_banner"
    },
    {
      "id": 4,
      "name": "新的结算说明",
      "category_id": null,
      "status": 1,
      "thumb": "FtUF2pMnzxkgnenDTjMs_conzCdf",
      "url": "article/4",
      "page_type": null,
      "priority": 1,
      "modular": "index_banner"
    }
  ],
  "info": "ok"
};

// 处理数据并插入到数据库
async function insertSwipers() {
  try {
    // 连接到数据库
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // 解析数据
    const swipers = data.data;
    for (const swiper of swipers) {
      await Swiper.upsert({
        id: swiper.id,
        name: swiper.name,
        category_id: swiper.category_id,
        status: swiper.status,
        thumb: 'http://static.peiwan.tv/' + swiper.thumb,
        url: swiper.url,
        page_type: swiper.page_type,
        priority: swiper.priority,
        modular: swiper.modular
      });

      console.log(`Inserted/Updated swiper with id: ${swiper.id}`);
    }

    console.log('Data has been inserted/updated successfully.');
  } catch (error) {
    console.error('Unable to connect to the database or insert data:', error);
  } finally {
    // 关闭连接
    await sequelize.close();
  }
}

// 执行脚本
insertSwipers();
