import axios from 'axios'
import { message } from 'antd'

// import store from '@/store'

console.log('BASE_API', import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // TOKEN注入
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(resp => {
  // console.log("RESP", resp)
  // if (resp.status >= 400) {
  //   message.error(`请求异常: ${resp.status}`)
  //   return Promise.reject(`请求异常: ${resp.status}`)
  // }
  const msg = resp.data.msg
  if (resp.data.code === 102) {
    // 登录过期
    return Promise.reject('登录已过期，请重新登录')
  } else if (resp.data.code !== 0) {
    // 其它错误
    message.error(msg)
    return Promise.reject(msg)
  }
  return resp.data.data
}, error => {
  message.error(error.message)
  return Promise.reject(error)
})

export default {
  get: (url, params = {}) => service({ method: 'GET', url, params }),
  post: (url, data = {}) => service({ method: 'POST', url, data })
}