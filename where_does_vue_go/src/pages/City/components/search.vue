<template>
   <div class="search-city">
      <input type="text" placeholder="输入城市名或拼音">
   </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search-city
  height .72rem
  background $bgColor
  padding 0 .1rem
  box-sizing border-box
  input
    line-height .62rem
    border-radius .06rem
    height .62rem
    width 100%
    background #fff
    font-size .3rem
    text-align center
    float left
    color #666
    padding 0 .1rem
</style>
