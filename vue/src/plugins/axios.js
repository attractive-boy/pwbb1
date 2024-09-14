import axios from 'axios'
import { router } from '@/router/index'

const baseURL = 'http://localhost:3000'

axios.defaults.withCredentials=true

const axiosInstance = axios.create({
  baseURL: baseURL, // 设置统一的基础 URL
  timeout: 9999999, // 设置请求超时时间
  withCredentials: true, // 允许携带 cookie
})
//设置jwt
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})


export default {
  install(app) {
    // 添加实例方法
    app.config.globalProperties.$http = axiosInstance
  }
}

export { baseURL }
