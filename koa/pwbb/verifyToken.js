const jwt = require('jsonwebtoken');
const secret = 'rG8L17&c5h+05+^oVlyilylE$)Qzc0D13PAyHSbaWwJ*wm2d*nD2KE6^IK0L9WK$0v2~J^t_AY0YfWmDSaGy@ji%Pswxl+rYD';

const verifyToken = async (ctx, next) => {
  const token = ctx.headers['authorization'];

  if (token) {
    try {
      // 校验 token
      const decoded = jwt.verify(token.split(' ')[1], secret);
      ctx.state.user = decoded;
      await next(); // 没有 token 或者 token 验证成功，继续执行后续中间件
    } catch (err) {
      ctx.status = 401;
      ctx.body = { message: 'Invalid token' };
      return;
    }
  }else{
    ctx.status = 401;
    ctx.body = { message: 'Invalid token' };
  }


};

//签发jwt
const signToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role
  };
  const options = {
    expiresIn: '1h', // token 过期时间
  };
  return jwt.sign(payload, secret, options);
};

module.exports = { verifyToken, signToken };
