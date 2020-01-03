import axios from 'axios'
import { message } from 'antd'

import config from './config'

axios.defaults.baseURL = config.requestBaseURL
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (config.isServer) {
    if (config.isDev) {
      return res.data || res
    } else {
      return res.data ? res.data.data : res
    }
  }
  if (typeof res.data !== 'object') {
    console.error('数据格式响应错误:', res.data)
    message.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.errcode) {
    if (res.data.message) message.error(res.data.message)
    return Promise.reject(res.data.data)
  }
  return res.data.data
})

export default axios
