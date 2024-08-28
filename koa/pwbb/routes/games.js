// routes/games.js
const router = require('koa-router')()
const GameList = require('../models/gamelist');

router.get('/games', async (ctx) => {
  try {
    const games = await GameList.findAll();
    ctx.body = games;
  } catch (error) {
    console.error('Error fetching games:', error);
    ctx.status = 500;
    ctx.body = { error: 'An error occurred while fetching games.' };
  }
});

//根据id获取游戏
router.get('/games/:id', async (ctx) => {
  try {
    const game = await GameList.findByPk(ctx.params.id);
    if (!game) {
      ctx.status = 404;
      ctx.body = { error: 'Game not found.' };
    } else {
      ctx.body = game;
    }
  } catch (error) {
    console.error('Error fetching game:', error);
  }
})

module.exports = router;
