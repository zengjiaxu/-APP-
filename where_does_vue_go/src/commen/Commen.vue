<template>
   <div class="commen" @click="handleClose">
     <div class="wrapper">
        <swiper :options='swiperOptions'>
          <swiper-slide
          v-for="(item,idx) of imgs"
          :key="idx"
          ><img class="commen-swiper" :src='item' ></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'commen',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true, // 自我刷新，解决swiper宽度计算的问题
        observeParents: true
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.commen >>> .swiper-container
  overflow inherit
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
    height 100vw
    width 100vw
    .commen-swiper
      width 100vw
      height 100vw
    .swiper-pagination
      color #ffffff
      bottom -1rem
      font-size .42rem
</style>
