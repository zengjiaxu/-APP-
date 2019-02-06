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
     <div class="aform">
       <div class="out" v-show="isActiveOne">
        <el-form label-width="60px" :model="formLabelAlign" :label-position="labelPosition">
            <el-form-item label="手机号" class="ko">
              <el-input v-model="formLabelAlign.phoneNumber" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="formLabelAlign.yzm" placeholder="请输入验证码"></el-input>
            </el-form-item>
          </el-form>
      </div>
       <div class="out" v-show="isActiveTwo">
        <el-form label-width="60px" :model="formLabelAlign" :label-position="labelPosition">
            <el-form-item label="账号" class="ko">
              <el-input v-model="formLabelAlign.phoneNumber" placeholder="手机号/邮箱/用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.yzm" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
      </div>
     </div>
      <div class="myBtn">
        <el-button type="primary">登录</el-button>
      </div>
      <p>
        <router-link to="/">找回密码</router-link>
      </p>
      <div class="my-foot">
        <ul>
          <li class="li-left">
            <router-link to="/">电脑版</router-link>
          </li>
          <li class="li-right">
            <router-link to="/">关于我们</router-link>
          </li>
        </ul>
      <div class="foot-font">
        <span>Qunar 京ICP备05021087</span>
      </div>
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
.aform >>> .el-form-item__label
  color #19a9ba
  font-size .32rem
.aform >>> .el-form-item
  margin-top .1rem
  margin-bottom .1rem
.aform >>> .ko
  border-bottom 1px solid #cccccc
.aform >>> .el-input__inner
  border none
.aform >>> .el-form
  margin 0 .2rem
.myBtn >>> .el-button
  background #85d1db
  border none
  width 100%
  height 1rem
  font-size 18px
.login
  font-size .32rem
  background #f3f9fc
  height 100vh
  position relative
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
    height 0.9rem
    padding .1rem .2rem
    .detail
      height .7rem
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
  .aform
    margin-top .2rem
    .out
      border-top 1px solid #cccccc
      border-bottom  1px solid #cccccc
      background #ffffff
  .myBtn
    padding 0 .2rem
    margin-top .3rem
  p
    text-align right
    padding-right .2rem
    margin-top .3rem
  .my-foot
    overflow hidden
    position absolute
    left 0
    bottom 0
    width 100%
    ul
      overflow hidden
      margin-bottom .3rem
      li
        width 50%
        list-style none
        text-align center
      .li-left
        float left
      .li-right
        float right
    .foot-font
      text-align center
      color #d4d9de
      font-size .12rem
      line-height 1rem
      border-top 1px solid #cccccc
a
  color #18a9b9
  text-decoration none
  font-size 13px
</style>
