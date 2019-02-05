<template>
   <div>
     <div class="login-header">
       <div>
          <span class="iconfont back-ico">&#xe624;</span>
       </div>
       <div class="login-font">
         登录
       </div>
      <div class="rigester">
         注册
       </div>
     </div>
     <div class="login-detail">

     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.login-header
  background #00bcd4
  height 0.7rem
  display flex
  width 100%
  .iconfont
    color #fff
    font-size .37rem
    font-weight bolder
    line-height .7rem
    width .7rem
    float left
  .login-font
    color #000
    font-size .37rem
    flex 1
    color #ffffff
    text-align center
    line-height .7rem
  .rigester
    float right
    line-height .7rem
    width .7rem
    font-size .3rem
    color #ffffff
.login-detail
  background #00bcd4
  height 0.7rem
</style>
