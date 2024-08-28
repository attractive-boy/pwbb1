const router = require('koa-router')()
const User = require('../models/user'); // 导入 User 模型

router.get('/peiwan', async function (ctx, next) {
  const { perPage = 10, page = 1, type, sex = 0, voice = 0, order = 1 } = ctx.query;

  try {
    const limit = parseInt(perPage, 10);
    const offset = (parseInt(page, 10) - 1) * limit;

    // 构建查询条件
    const where = {
      ...(type && { type }),
    };
    if(sex != 0){
      where.sex = sex;
    }
    // 查询数据库
    const users = await User.findAll({
      where,
      limit,
      offset
    });

    ctx.body = { data: users }; 
  } catch (error) {
    console.error('Error querying database:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
});

module.exports = router
