import request from './request'
import config from './config'
const baseUrl = config.baseUrl
// request.config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
request.config.headers = { 'Content-Type': 'application/json' }
request.config.headers = { 'Cookie': wx.getStorageSync('Cookie') }

// var querystring = require('querystring')

const api = {
  Req :(apiUrl,params={},method='post',isLoading=false) => {
    var url = baseUrl + apiUrl;
    return request.request(url,params,{
      method:method,
      timeout:config.timeout //超时设置为5s
    })
  }
}
export default api
