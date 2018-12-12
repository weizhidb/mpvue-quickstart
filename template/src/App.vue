<script>
  import 'mp-weui/lib/style.css'
  export default {
    created() {
      // 调用API从本地缓存中获取数据
//      const logs = wx.getStorageSync('logs') || []
//      logs.unshift(Date.now())
//      wx.setStorageSync('logs', logs)
//      console.log('app created and cache logs by setStorageSync')
    },
    mounted() {
      wx.getSystemInfo({
        success (res) {
          console.log('res = ', res)
        }
      })
    }
  }
</script>

<style>

  html, body{
    height: 100%;
  }
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
