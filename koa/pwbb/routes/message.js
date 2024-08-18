// routes/messages.js
const router = require('koa-router')()
const Message = require('../models/message');

router.get('/messages', async (ctx) => {
    const page = parseInt(ctx.query.page) || 1;
    const limit = parseInt(ctx.query.limit) || 10;
    const offset = (page - 1) * limit;
  
    const result = await Message.findAndCountAll({
      limit,
      offset,
      order: [['last_time', 'DESC']],
    });
  
    ctx.body = {
      status: 1,
      data: {
        count: result.count,
        rows: result.rows,
        currentPage: page,
        totalPages: Math.ceil(result.count / limit)
      }
    };
  });
  
module.exports = router;
