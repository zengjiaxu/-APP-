<template>
   <div class="header">
     城市选择
     <router-link to="/">
     <span class="iconfont header-back">&#xe624;</span>
     </router-link>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'headerCity'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  position relative
  overflow hidden
  line-height .86rem
  background $bgColor
  color #ffffff
  font-size:.32rem
  text-align center
  .header-back
    font-size .4rem
    position absolute
    left 0
    color #ffffff
</style>
