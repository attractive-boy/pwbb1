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

module.exports = router;
