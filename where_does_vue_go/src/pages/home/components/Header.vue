<template>
<div>
    <div class="header">
      <div class="header-left"><span class="iconfont back-ico">&#xe624;</span></div>
      <div class="header-input">
        <span class="iconfont">&#xe62a;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe62d;</span>
      </div>
      </router-link>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    line-height: .86rem
    display :flex
    font-size :0.3rem
    background: $bgColor
    color :#fff
    .header-left
      width: .64rem
      float:left
      text-align: center
    .header-input
      flex: 1
      background: #fff
      border-radius .1rem
      margin-top:.12rem
      margin-left:.2rem
      height: .64rem
      line-height:.64rem
      color:#ccc
      padding-left:.2rem
    .back-ico
      font-size: .4rem
    a
      text-decoration none
      color :#fff
      .header-right
        min-width: 1.04rem
        text-align: center
</style>
