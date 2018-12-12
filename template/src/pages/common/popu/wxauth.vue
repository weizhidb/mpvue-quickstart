<template>
  <!--参考https://www.jb51.net/article/111467.htm-->
  <!--微信授权界面-->
    <div>
      <CommonPopu
      :Obj="Obj"
      >
        <div class="title">提示</div>
        <div class="content">{{Obj.modelContent}}</div>
        <button
          class="confirm"
          open-type="getUserInfo"
          @getuserinfo="wxGetUserInfo">
          确认
        </button>
      </CommonPopu>
    </div>
</template>

<script type="text/ecmascript-6">
  import CommonPopu from './index.vue'
    export default {
      props: {
        WxshowModel: {
          type: Boolean,
          default: true
        },
        WxmodelContent: {
          type: String,
          default: '请您授权'
        }
      },
      data() {
        return {
          Obj:{
            showModel:this.WxshowModel,
            modelContent: this.WxmodelContent,
          }
        }
      },
      components: {
        CommonPopu
      },
      methods: {
        modelClose() {
          this.$emit('modelClose')
        },
        change(index, item) {
          for (var i = 0; i < this.obj.length; i++) {
            this.obj[i].checked = false
          }
          item.checked = true
          console.log('index = ' + index)
          this.$emit('choiceIndex', index, item.type)
          this.$emit('modelClose')
        },
        wxGetUserInfo() {
          wx.getUserInfo({
            success: (res) => {
//              console.log(res.userInfo.nickName)
              console.log('允许获取用户信息')
              this.$emit('allowGetUserInfo')
//              this.$router.back()
            },
            fail: (res) => {
//              this.wxGetUserInfo()
              console.log('deny')
              wx.showToast({
                title: '您拒绝了授权',
                icon: 'none',
                duration: 2000
              })
            }
          })
        }
      },
      created() {
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .title{
    color: #000;
    font-size: 21px;
    text-align: center;
    margin-top: 10px;
  }
  .content{
    margin-bottom:15px;
    margin-top: 15px;
    margin-left:15px;
    margin-right: 15px;
    color: #b5b5b5;
    font-size: 18px;
    line-height: 22px;
  }
  .confirm{
    color: #66d24e;
    font-size: 21px;
    text-align: center;
    /*padding: 8px;*/
    /*border-top: 1px solid #eaeaec;*/
  }
  button::after {
    border-radius: 0;
  }
  button{
    border-radius: 0;
  }
</style>
