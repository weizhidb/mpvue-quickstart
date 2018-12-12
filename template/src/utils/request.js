/**
 * Created by user on 2018/4/23.
 */
import Fly from 'flyio/dist/npm/wx'
// import api from '@/utils/api'
// import Fly from 'flyio'
import Vue from 'vue'
import { getTokenFun } from '@/utils/wx'
import config from '../utils/config'
import common from '../utils/common'

const request = new Fly()
Vue.prototype.$flyhttp = request
// request.config.headers = { 'Authorization': wx.getStorageSync('Authorization') }
// request.config.headers['token'] = wx.getStorageSync('token')
console.log('request token111 = ' + wx.getStorageSync('Cookie'))

request.interceptors.request.use((request) => {
  console.log('request url = ' + request.baseURL + request.url)
  console.log('request is loading = ' + request.isLoading)
  // 获取token接口不加载提示
  if (undefined === request.isLoading || request.isLoading) {
    wx.showLoading({
      title: '玩命加载中'
    })
  }
  // 获取token的情况下不带token参数
  request.headers['Cookie'] = wx.getStorageSync('Cookie')
  console.log('request.url = ' + request.url)
  request.headers['X-Requested-With'] = 'XMLHttpRequest'
  request.headers['Content-Type'] = 'application/json;charset=UTF-8'
  if (request.url === 'api/auth') {
    // request.headers['X-Requested-With'] = 'XMLHttpRequest'
  }
  // wx.showNavigationBarLoading()
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    wx.hideNavigationBarLoading()
    console.log(response)
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading()
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: '网络出小差啦~~~',
      icon: 'none'
    })
    console.log('err = ', err.status)
    // 401表示session失效
    if (401 === err.status) {
      common.deleteCache()
      wx.redirectTo({
        url: config.sessionExpireJump
      })
    }
    return promise.resolve(err)
  }
)

export default request
