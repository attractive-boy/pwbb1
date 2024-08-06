const router = require('koa-router')()
const Swiper = require('../models/swiper'); // 导入 Swiper 模型
// 查询所有轮播图
router.get('/swipers', async (ctx) => {
    try {
      const swipers = await Swiper.findAll();
      ctx.body = swipers;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Internal Server Error' }
      console.error('Error querying swipers:', err)
    }
  });
module.exports = router
