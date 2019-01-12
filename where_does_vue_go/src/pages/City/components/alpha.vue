<template>
   <div class="no">
     <ul class="list">
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
     </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'alpha'
}
</script>

<style lang="stylus" scoped>
.list
  font-size .32rem
  text-align right
  list-style none
  position absolute
  width .4rem
  background skyblue
  right 0
  display flex
  flex-flow column
  justify-content center
  align-items center
  height 100vh
  background #ccc
  opacity 0.6
  .item
    line-height .4rem
    text-align center
    color #666
</style>
