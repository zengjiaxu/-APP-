<template>
   <div class="login">
     <div class="login-header">
       <router-link to="/">
          <span class="iconfont back-ico">&#xe624;</span>
       </router-link>
       <div class="login-font">
         登录
       </div>
      <router-link to="/register" class="rigester" tag="div">
         注册
      </router-link>
     </div>
     <div class="login-detail">
       <div class="detail">
         <div class="left-detail" :class="{ newClass: isActiveOne }" @click="toggleClassOne">短信验证码登录</div>
         <div class="right-detail" :class="{ newClass: isActiveTwo }" @click="toggleClassTwo">账号登录</div>
       </div>
     </div>
     <div class="aform">
       <div class="out" v-show="isActiveOne">
        <el-form
        label-width="60px"
        :model="formLabelAlign"
        :label-position="labelPosition">
            <el-form-item label="手机号" class="ko">
              <el-input v-model="formLabelAlign.phoneNumber" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码" class="kk">
              <el-input v-model="formLabelAlign.yzm" placeholder="请输入验证码"></el-input>
              <el-button size="medium" class="el-button-yzm">获取验证码</el-button>
            </el-form-item>
          </el-form>
      </div>
       <div class="out" v-show="isActiveTwo">
        <el-form label-width="60px" :model="formLabelAlign" :label-position="labelPosition">
            <el-form-item label="账号" class="ko">
              <el-input v-model="formLabelAlign.username" placeholder="手机号/邮箱/用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.pass" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
          </el-form>
      </div>
     </div>
      <div class="myBtn">
        <el-button type="primary" :class="{trueColor:isTrueColor}" :disabled="isDisabled" @click="loginUser">登录</el-button>
      </div>
      <p>
        <router-link to="/">找回密码</router-link>
      </p>
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import CryptoJS from 'crypto-js'
export default {
  name: 'Header',
  data () {
    return {
      isActiveOne: true,
      isActiveTwo: false,
      isTrueColor: false,
      labelPosition: 'left',
      isDisabled: true,
      formLabelAlign: {
        phoneNumber: '',
        yzm: '',
        username: '',
        pass: ''
      },
      rules: ''
    }
  },
  methods: {
    toggleClassOne () {
      this.isActiveOne = true
      this.isActiveTwo = false
      this.isDisabled = true
      this.isTrueColor = false
      if ((this.formLabelAlign.phoneNumber.length === 11 && this.formLabelAlign.yzm.length >= 4)) {
        this.isTrueColor = true
        this.isDisabled = false
      } else {
        this.isTrueColor = false
        this.isDisabled = true
      }
    },
    toggleClassTwo () {
      this.isActiveTwo = true
      this.isActiveOne = false
      this.isDisabled = true
      this.isTrueColor = false
      if ((this.formLabelAlign.username.length > 0 && this.formLabelAlign.pass.length > 0)) {
        this.isTrueColor = true
        this.isDisabled = false
      } else {
        this.isTrueColor = false
        this.isDisabled = true
      }
    },
    loginUser () {
      axios.get('/static/mock/login.json').then(this.getInfo).catch((err) => {
        console.log(err)
      })
    },
    getInfo (res) {
      res = res.data
      if (res.ret === true && res.data) {
        if (res.data.user === this.formLabelAlign.username && res.data.pass === this.formLabelAlign.pass) {
          this.$router.push('/')
          let d = new Date()
          d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000)
          let expires = 'expires=' + d.toGMTString()
          let salt = CryptoJS.enc.Utf8.parse('salt')// 盐
          let iter = 1000// 迭代次数
          let newPass = CryptoJS.PBKDF2(res.data.user, salt,
            { keySize: parseInt(4),
              iterations: parseInt(iter) }
          )
          document.cookie = `${res.data.user}=${newPass};${expires}`
        } else {
          this.$alert('账号或密码错误', {
            confirmButtonText: '确定',
            center: true
          })
        }
      }
    }
  },
  watch: {
    formLabelAlign: {
      handler: function (val) {
        if ((val.phoneNumber.length === 11 && val.yzm.length === 6) || (val.username.length > 0 && val.pass.length > 0)) {
          this.isTrueColor = true
          this.isDisabled = false
        } else {
          this.isTrueColor = false
          this.isDisabled = true
        }
      },
      deep: true
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
.aform >>> .kk
  padding-right 2rem
.myBtn >>> .el-button
  background #85d1db
  border none
  width 100%
  height 1rem
  font-size 18px
.myBtn >>> .trueColor
  background #18a9b9
.aform >>> .el-button-yzm
  width 2rem
  height .7rem
  position absolute
  top 0
  right -2rem
  margin-bottom .2rem
  text-align center
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
a
  color #18a9b9
  text-decoration none
  font-size 13px
</style>
