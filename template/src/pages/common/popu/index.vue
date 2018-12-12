<template>
  <!--参考https://www.jb51.net/article/111467.htm-->
    <div v-if="Obj.showModel">
      <div class="drawer_screen" @click="modelClose">
      </div>
      <div class="drawer_box">
        <slot></slot>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        Obj:Object
      },
      data() {
        return {}
      },
      components: {},
      methods: {
      },
      created() {
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  /*mask*/
  .drawer_screen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #000;
    opacity: 0.8;
    overflow: hidden;
  }
  .drawer_box{
    width: 70%;
    min-height: 100px;
    max-height:280px;
    overflow: auto;
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 1001;
    background: #FAFAFA;
    margin: 0px 15% 0 15%;
    border-radius: 3px;
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
  }
  .radio_div{
    margin-left:10px;
    margin-top:10px;

  }
  .radio-group{
    padding-bottom: 10px;
  }
  button::after {
    border-radius: 0;
  }
  button{
    border-radius: 0;
  }
</style>
