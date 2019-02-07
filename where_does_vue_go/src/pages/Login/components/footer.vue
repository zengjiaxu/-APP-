<template>
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
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myFoot'
}
</script>

<style lang="stylus" scoped>
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
