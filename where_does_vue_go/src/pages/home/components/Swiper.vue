<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="listLength">
    <swiper-slide v-for="item of list" :key="item.id"><img class="img-swiper" :src="item.imgUrl" ></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    listLength () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet
    background-color: #fff !important
   .wrapper
    width: 100%
    height:0
    padding-bottom:33%
 .img-swiper
   width: 100%
</style>
