<template>
   <div>
     <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
       <span class="iconfont">&#xe624;</span>
     </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let myOpacity = top / 140
        myOpacity = myOpacity > 1 ? 1 : myOpacity
        this.opacityStyle = {
          opacity: myOpacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)// 页面展示的时候执行
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)// 页面消失的时候执行
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, 0.4)
  display flex
  justify-content center
  align-items center
  .iconfont
    font-size .4rem
    color #ffffff
.header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
