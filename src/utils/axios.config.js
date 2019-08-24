import axios from 'axios'
import { Message } from 'element-ui'//
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截
axios.interceptors.request.use(config => {
  let userInfo = window.localStorage.getItem('user-info') // 获取用户存储信息
  let token = userInfo ? JSON.parse(userInfo).token : null
  config.headers.Authorization = `Bearer ${token}`
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(response => {
  return response.data ? response.data : {}
}, error => {
  let code = error.response ? error.response.status : ''
  let message = ''
  switch (code) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证'
      break
    case 507:
      message = '服务器数据异常'
      break
    case 401:
      message = 'token过期或未传'
      window.localStorage.clear()// 清除本项目在浏览器的缓存
      window.location.hash = '#/login'
      break
    default:
      message = '未知错误'
      break
  }
  Message({ message, type: 'warning' })
  return new Promise()// 有个坑
})

export default axios
