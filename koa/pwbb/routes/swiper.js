const router = require('koa-router')()
const Swiper = require('../models/swiper'); // 导入 Swiper 模型
const { Op } = require('sequelize');
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
router.get('/swipers/page', async (ctx) => {
  try {
    const { page = 1, limit = 10, search = '', sortField = 'id', sortOrder = 'ASC' } = ctx.query;
    const offset = (page - 1) * limit;
    
    // Construct the where clause for filtering
    const where = search.length > 0 ? {
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        // Add more searchable fields here if necessary
      ],
    } : {};
    
    // Fetch the users with pagination and sorting
    const swipers = await Swiper.findAll({
      where,
      offset: parseInt(offset, 10), // Ensuring the offset is an integer
      limit: parseInt(limit, 10),   // Ensuring the limit is an integer
      order: [[sortField, sortOrder]],
    });
    
    // Count the total number of users matching the filter
    const totalCount = await Swiper.count({ where });
    
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount / limit);
  
    ctx.body = {
      code: 200,
      msg: 'success',
      data: {
        list: swipers,
        totalCount,
        totalPages,
      },
    };
    console.log(ctx.body)
  }
  catch (error) {
    ctx.body = {
      code: 500,
      msg: error.message,
    };
    console.error(error);
  }
})
module.exports = router
