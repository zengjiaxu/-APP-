<template>
   <div class="reg-header">
       <router-link to="/login" class="iconfont">
          <span class="iconfont back-ico">&#xe624;</span>
       </router-link>
       <div class="login-font">
         注册
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.reg-header
  width 100%
  height 0.88rem
  background #18a9b9
  .iconfont
    color #fff
    font-size .37rem
    font-weight bolder
    line-height .88rem
    width .7rem
    position absolute
    left 0
    top 0
  .login-font
    color #ffffff
    font-size .37rem
    color #ffffff
    text-align center
    line-height .88rem
</style>
