// routes/games.js
const router = require('koa-router')();
const Gamelist = require('../models/gamelist');
const GamelistLv = require('../models/gamelistLv');
const GamelistTaskLimit = require('../models/gamelistTaskLimit');
const GamelistVerifyWay = require('../models/gamelistVerifyWay');
const { Op } = require('sequelize');

router.get('/games', async (ctx) => {
  try {
    const games = await Gamelist.findAll({
      include: [
        {
          model: GamelistLv,
          attributes: ['lv', 'name', 'title'] // 选择需要的字段
        },
        {
          model: GamelistTaskLimit,
          attributes: ['turnback_rate', 'done_num', 'refund_rate', 'total_num', 'task_limit_effect_num'] // 选择需要的字段
        },
        {
          model: GamelistVerifyWay,
          attributes: ['verify_key', 'verify_ct', 'verify_title'] // 选择需要的字段
        }
      ]
    });
    ctx.body = games;
  } catch (error) {
    console.error('Error fetching games:', error);
    ctx.status = 500;
    ctx.body = { error: 'An error occurred while fetching games.' };
  }
});
router.get('/games/page', async (ctx) => {
  try {
    const { page = 1, limit = 10, search = '', sortField = 'id', sortOrder = 'ASC' } = ctx.query;
    const offset = (page - 1) * limit;

    // 搜索条件
    const where = search.length > 0 ? {
      [Op.or]: [
        { 'name': { [Op.like]: `%${search}%` } },
        { 'keyWord': { [Op.like]: `%${search}%` } }
      ]
    } : {};

    // 先进行一次独立的 `count` 查询，只考虑主表和搜索条件
    const totalRecords = await Gamelist.count({ where });
    
    // 然后再进行分页查询，考虑 `include` 部分
    const games = await Gamelist.findAll({
      where,
      include: [
        {
          model: GamelistLv,
          attributes: ['lv', 'name', 'title']
        },
        {
          model: GamelistTaskLimit,
          attributes: ['turnback_rate', 'done_num', 'refund_rate', 'total_num', 'task_limit_effect_num']
        },
        {
          model: GamelistVerifyWay,
          attributes: ['verify_key', 'verify_ct', 'verify_title']
        }
      ],
      offset: parseInt(offset),
      limit: parseInt(limit),
      distinct: true, // 确保返回的数据是去重的
      order: [[sortField, sortOrder]]
    });

    ctx.body = {
      total: totalRecords, // 正确的总记录数
      page: parseInt(page),
      limit: parseInt(limit),
      data: games // 当前页的数据
    };
  } catch (error) {
    console.error('Error fetching games:', error);
    ctx.status = 500;
    ctx.body = { error: 'An error occurred while fetching games.' };
  }
});


// 根据 ID 获取游戏及其关联数据
router.get('/games/:id', async (ctx) => {
  try {
    const game = await Gamelist.findByPk(ctx.params.id, {
      include: [
        {
          model: GamelistLv,
          attributes: ['lv', 'name', 'title']
        },
        {
          model: GamelistTaskLimit,
          attributes: ['turnback_rate', 'done_num', 'refund_rate', 'total_num', 'task_limit_effect_num']
        },
        {
          model: GamelistVerifyWay,
          attributes: ['verify_key', 'verify_ct', 'verify_title'] 
        }
      ]
    });
    if (!game) {
      ctx.status = 404;
      ctx.body = { error: 'Game not found.' };
    } else {
      ctx.body = game;
    }
  } catch (error) {
    console.error('Error fetching game:', error);
    ctx.status = 500;
    ctx.body = { error: 'An error occurred while fetching the game.' };
  }
});

module.exports = router;
