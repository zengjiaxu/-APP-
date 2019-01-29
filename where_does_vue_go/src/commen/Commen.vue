<template>
   <div class="commen">
     <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,idx) of list" :key="idx"><img class="img-swiper" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" ></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'commen',
  data () {
    return {
      list: [1, 2, 3]
    }
  }
}
</script>

<style lang="stylus" scoped>
.commen
  background #000
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  display flex
  justify-content center
  flex-flow wrap column
  z-index 99
  .wrapper
    background #ffffff
    height 80vw
    display flex
    align-items center
    .swiper-slide
     display flex
     align-items center
     .img-swiper
      width 100%
</style>
