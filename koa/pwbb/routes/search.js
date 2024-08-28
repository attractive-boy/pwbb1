const { Op } = require('sequelize'); // 导入 Sequelize 操作符
const User = require('../models/user');
const GameList = require('../models/gamelist');
const router = require('koa-router')();

router.get('/search', async (ctx) => {
    try {
        const { keyword, page = 1, pageSize = 10 } = ctx.query; // 默认页码为1，每页10条记录

        const offset = (page - 1) * pageSize; // 计算偏移量
        const limit = parseInt(pageSize); // 每页显示的数量

        // 查询游戏列表
        const games = await GameList.findAll({
            where: {
                name: { [Op.like]: `%${keyword}%` } // 使用 Sequelize 操作符 Op.like
            },
            // limit,
            // offset
        });

        // 查询用户列表
        const users = await User.findAll({
            where: {
                nickname: { [Op.like]: `%${keyword}%` } // 使用 Sequelize 操作符 Op.like
            },
            limit,
            offset
        });

        ctx.body = { games, users, page: parseInt(page), pageSize: limit };
    } catch (error) {
        console.error('Error querying database:', error);
        ctx.status = 500;
        ctx.body = { error: 'Internal server error' };
    }
});

module.exports = router;
