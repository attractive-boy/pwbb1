// routes/messages.js
const router = require('koa-router')()
const Message = require('../models/message');
const { Op } = require('sequelize');
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

  router.get('/message/page', async (ctx) => {
    try {
      const { page = 1, limit = 10, search = '', sortField = 'id', sortOrder = 'ASC' } = ctx.query;
      const offset = (page - 1) * limit;
      
      // Construct the where clause for filtering
      const where = search.length > 0 ? {
        [Op.or]: [
          { tnickname: { [Op.like]: `%${search}%` } },
          // Add more searchable fields here if necessary
        ],
      } : {};
      
      const totalRecords = await Message.count({ where });
      const totalPages = Math.ceil(totalRecords / limit);
      const messages = await Message.findAll({
        where,
        offset: parseInt(offset, 10), // Ensuring the offset is an integer
        limit: parseInt(limit, 10),   // Ensuring the limit is an integer
        order: [[sortField, sortOrder]],
      });
      ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          totalRecords,
          totalPages,
          messages,
        },
      };
    } catch (error) {
      ctx.body = { code: 500, msg: error.message };
      console.error(error);
      }
    })
module.exports = router;
