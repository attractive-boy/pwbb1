const Koa = require("koa");
const fs = require("fs-extra");
const path = require("path");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const sequelize = require("./db");
const cors = require("koa2-cors"); // 引入 koa2-cors 中间件

// Error handler
onerror(app);
// 添加跨域支持
app.use(
  cors({
    origin: (ctx) => {
        return ctx.request.header.origin; 
    },
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // 允许的方法
    allowHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept","Authorization"], // 允许的头部
    credentials: true, // 允许发送 cookie
  })
);


sequelize.sync().then(() => {
  console.log("Database synced");
});
// Middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(path.join(__dirname, "public")));

app.use(
  views(path.join(__dirname, "views"), {
    extension: "pug",
  })
);

// Logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// Dynamically load and use routes
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  if (file.endsWith(".js")) {
    const route = require(path.join(routesPath, file));
    app.use(route.routes());
    app.use(route.allowedMethods());
  }
});

// Error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
