/*
 * @Author: your name
 * @Date: 2020-03-02 11:29:11
 * @LastEditTime: 2020-09-03 14:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WH-H5\src\utils\request.js
 */
import axios from 'axios'
import { Toast, Dialog } from 'vant'
import store from '../store'
import { getToken } from '@/utils/auth'
import configs from '@/configs'
import router from '@/router/index.js'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: configs.baseURL, // api的base_url
  timeout: 300000, // 请求超时时间,
  headers: {
    'Cache-Control': 'no-cache'
  }
})
// axios.defaults.withCredentials = true // 允许跨域
// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * error_code为非1是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.error_code !== 1) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了; 402:用户验证失败请重新登录
      if (res.error_code === 50012 || res.error_code === 50014) {
        Toast(res.error_msg)
        store.dispatch('acExit').then(() => {
          router.push({ path: '/' })
        })
      } else if (res.error_code === -10003 || res.error_code === -10001 || res.error_code === -10002 || res.error_code === -140002) {
        // 10003：验证码错误 // 140001 每日限购 // 14002 限购
        Toast.fail(res.error_msg)
      } else if (res.error_code === -80000 || res.error_code === -130005) {
        // 积分相关错误
        Dialog.alert({
          title: '提示',
          message: res.error_msg
        }).then(() => {
          location.reload()
        })
      } else if (res.error_code === -3 || res.error_code === -2 || res.error_code === -10006 || res.error_code === 2000000 || res.error_code === -140001) {
        Dialog.alert({
          title: '提示',
          message: res.error_msg
        }).then(() => {
        })
      } else if (res.error_code === -60009 || res.error_code === -90001) {
        // 净水去设备
        Dialog.alert({
          title: '提示',
          message: res.error_msg
        }).then(() => {
          router.go(-1)
        })
      } else if (res.error_code === -402) {
        store.dispatch('acExit').then(() => {
          location.reload()
        })
      } else {
        Toast(res.error_msg)
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    // 关闭loading
    console.error('err', error) // for debug
    Toast(error)
    return Promise.reject(error)
  }
)

export default service
