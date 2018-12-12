<template>
  <div>
    <!--<TestIndex>-->
      <!--jjjjj-->
      <!--<Item-->
      <!--:text="text"-->
      <!--:Obj="Obj">-->
        <!--<div>{{text}}</div>-->
        <!--<div>{{Obj.test}}</div>-->
      <!--</Item>-->
    <!--</TestIndex>-->
    <!--<WxAuth></WxAuth>-->
    <div>评论</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TestIndex from './common/index.vue'
  import Item from './common/item.vue'
  import WxAuth from './common/popu/wxauth.vue'
  export default {
    data() {
      return {
        text: 'hello,世界',
        Obj: {
          test: 'xxx'
        }
      }
    },
    components: {
      TestIndex,
      Item,
      WxAuth
    },
    methods: {},
    created() {
//      this.$fd.Req("public/api/exe/login/verifyCode")
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
