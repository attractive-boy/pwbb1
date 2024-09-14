const router = require('koa-router')();
const User = require('../models/user'); // 导入 User 模型
const UserVoice = require('../models/UserVoice'); // 导入 UserVoice 模型
const Admin = require('../models/admin');
const {signToken} = require('../verifyToken');
const { Op } = require('sequelize');
// 获取陪玩列表
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
      offset,
      include: [{
        model: UserVoice,
        attributes: ['voice_url', 'voice_len', 'voice_translate'] // 指定要获取的字段
      }]
    });

    ctx.body = { data: users }; 
  } catch (error) {
    console.error('Error querying database:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
});

// 根据 ID 获取陪玩
router.get('/peiwan/:id', async function (ctx, next) {
  const { id } = ctx.params;

  try {
    const user = await User.findByPk(id, {
      include: [{
        model: UserVoice,
        attributes: ['voice_url', 'voice_len', 'voice_translate'] // 指定要获取的字段
      }]
    });

    if (!user) {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
    } else {
      ctx.body = { data: user };
    }
  } catch (error) {
    console.error('Error querying database:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
});

// 管理员后台登录 
router.post('/admin/login', async function (ctx, next) {
  const { username, password } = ctx.request.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (!admin) {
      ctx.status = 401;
      ctx.body = { error: 'Invalid username or password' };
    } else if (admin.password !== password) {
      ctx.status = 401;
      ctx.body = { error: 'Invalid usernameor password' };
    }
    admin.role = 'admin';
    //签发jwt
    ctx.body = { token: signToken(admin) };
  }
  catch (error) {
    console.error('Error querying database:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
});

router.get('/users/page', async (ctx) => {
  try {
    const { page = 1, limit = 10, search = '', sortField = 'id', sortOrder = 'ASC' } = ctx.query;
    const offset = (page - 1) * limit;
    
    // Construct the where clause for filtering
    const where = search.length > 0 ? {
      [Op.or]: [
        { nickname: { [Op.like]: `%${search}%` } },
        // Add more searchable fields here if necessary
      ],
    } : {};

    // Fetch the users with pagination and sorting
    const users = await User.findAll({
      where,
      offset: parseInt(offset, 10), // Ensuring the offset is an integer
      limit: parseInt(limit, 10),   // Ensuring the limit is an integer
      order: [[sortField, sortOrder]],
    });

    // Get the total number of records that match the where clause
    const totalRecords = await User.count({ where });

    // Send response
    ctx.body = {
      code: 200,
      data: {
        users,
        totalRecords,
      },
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: error.message,
    };
    console.error(error);
  }
});


module.exports = router;
