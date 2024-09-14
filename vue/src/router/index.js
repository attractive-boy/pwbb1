import { createRouter, createWebHashHistory } from 'vue-router'

// 使用 require.context 动态导入路由模块
const routeModules = require.context('../views', true, /\/page\.js$/)
const compModules = require.context('../views', true, /\/IndexView\.vue$/)

// 拼接注册路由数组
const routes = routeModules.keys().map((key) => {
  const path = key.replace('./', '').replace('/page.js', '')
  const component = compModules(`./${path}/IndexView.vue`).default
  console.log(routeModules(key))
  return {
    path: `/${path}`,
    component,
    meta: routeModules(key).default
  }
})

// 添加默认路由
routes.push({
  path: '/',
  redirect: '/login' // 这里将默认路由重定向到您指定的首页路径
})

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title.toString()
  }
  next()
})

export function setupRouter(app) {
  console.log(routes)
  app.use(router)
  return router.isReady()
}
