<template>
  <div>
   <div class="form-detail">
    <el-form :label-position="labelPosition" label-width="80px" :model="formRegister">
      <el-form-item label="手机号" class="ko">
        <el-input v-model="formRegister.phone"  placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="图形码" class="ko kk">
        <el-input v-model="formRegister.txm"  placeholder="请输入图形码" class="midIpt"></el-input>
        <img class="yzmImg" src="//user.qunar.com/captcha//api/image?k={en7mni(z&amp;p=ucenter_register&amp;c=99b054becba8690183f1f7f57e27a690&amp;t=1549559686679" alt="">
      </el-form-item>
      <el-form-item label="验证码" class="kk">
        <el-input v-model="formRegister.yzm" placeholder="请输入验证码"></el-input>
        <el-button size="medium" class="el-button-yzm">获取验证码</el-button>
      </el-form-item>
    </el-form>
   </div>
    <div class="myBtn">
      <el-button type="primary">注册</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'formDetail',
  data () {
    return {
      formRegister: {
        phone: '',
        txm: '',
        yzm: ''
      },
      labelPosition: 'left'
    }
  }
}
</script>

<style lang="stylus" scoped>
.form-detail >>> .el-form-item__label
  color #19a9ba
  font-size .32rem
.form-detail >>> .el-form-item
  margin-top .1rem
  margin-bottom .1rem
.form-detail >>> .ko
  border-bottom 1px solid #cccccc
.form-detail >>> .kk
  padding-right 2rem
.form-detail >>> .el-input__inner
  border none
.form-detail >>> .el-form
  margin 0 .2rem
.form-detail >>> .el-button-yzm
  width 2rem
  height .7rem
  position absolute
  top 0
  right -2rem
  margin-bottom .2rem
  text-align center
.myBtn >>> .el-button
  background #85d1db
  border none
  width 100%
  height 1rem
  font-size 18px
.form-detail
  border-top 1px solid #cccccc
  border-bottom 1px solid #cccccc
  margin-top .2rem
  background #ffffff
.yzmImg
  width 2rem
  height .7rem
  position absolute
  top 0
  right -2rem
  margin-bottom .2rem
  border-radius .05rem
</style>
