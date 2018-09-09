v1.0.0
初始代码



//三方库引用
* flyio 使用方法

具体内容参见 [微信小程序中使用flyio](https://wendux.github.io/dist/#/doc/flyio/wx)，这里提示下小程序中需要引入的是 `flyio/dist/npm/wx.js` 这个文件，可以配置下 webpack 的 alias 方便调用

``` js
alias: {
  '@': resolve('src'),
  vue: 'mpvue',
  flyio: 'flyio/dist/npm/wx',
  wx: resolve('src/utils/wx')
}
```

post请求：
let querystring1 = require('querystring')
      this.$flyhttp.post('http://192.168.0.9:8080/test/gettoken', querystring1.stringify({
        code: '111',
        token: 24,
        name: '18513222525'
      }))
        .then(function(response) {
          console.log('9999999999999999999999999')
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })


 // Vux使用教程

npm install vux --save


// mp-weui 安装
适合安装公司内部的git服务器上的项目
npm install git+https://gitee.com/weizhidb/mp-weui.git

