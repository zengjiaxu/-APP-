<template>
   <div class="login">
     <div class="login-header">
       <router-link to="/">
          <span class="iconfont back-ico">&#xe624;</span>
       </router-link>
       <div class="login-font">
         登录
       </div>
      <div class="rigester">
         注册
       </div>
     </div>
     <div class="login-detail">
       <div class="detail">
         <div class="left-detail" :class="{ newClass: isActiveOne }" @click="toggleClassOne">短信验证码登录</div>
         <div class="right-detail" :class="{ newClass: isActiveTwo }" @click="toggleClassTwo">账号登录</div>
       </div>
     </div>
     <div class="afrom">
     <el-form label-width="60px" :model="formLabelAlign" :label-position="labelPosition">
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.phoneNumber" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="formLabelAlign.yzm" placeholder="请输入验证码"></el-input>
        </el-form-item>
      </el-form>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header',
  data () {
    return {
      isActiveOne: true,
      isActiveTwo: false,
      labelPosition: 'left',
      formLabelAlign: {
        phoneNumber: '',
        yzm: ''
      }
    }
  },
  methods: {
    toggleClassOne () {
      this.isActiveOne = true
      this.isActiveTwo = false
    },
    toggleClassTwo () {
      this.isActiveTwo = true
      this.isActiveOne = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.afrom >>> .control-label
  color #19a9ba
.login
  font-size .32rem
  .login-header
    background #18a9b9
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
      color #ffffff
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
    background #18a9b9
    height 0.8rem
    padding .1rem .2rem
    .detail
      height .6rem
      border-radius 3px
      border 1px solid #ffffff
      .right-detail
        float right
        width 50%
        line-height .6rem
        height 100%
        text-align center
        color #ffffff
      .left-detail
        float left
        text-align center
        width 50%
        height 100%
        line-height .6rem
        color #ffffff
      .newClass
        background #ffffff
        color #18a9b9
</style>
