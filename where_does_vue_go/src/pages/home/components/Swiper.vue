<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1812/a8/90d66a621daf6802.jpg_750x200_d479b789.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1812/e0/7aed5dde53dabe02.jpg_750x200_9b7a65fd.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1609/16/bee89c87307a3302.jpg_750x200_2c6299b9.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1811/6c/b1b8677dc1886d02.jpg_750x200_1931f6c4.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1811/6c/b1b8677dc1886d02.jpg_750x200_1931f6c4.jpg" ></swiper-slide>
    <swiper-slide><img class="img-swiper" src="http://img1.qunarzz.com/piao/fusion/1812/d4/d51b0de13bdaeb02.jpg_750x200_a16ebfe3.jpg" ></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1500
      }
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
    padding-bottom:26.67%
 .img-swiper
   width: 100%
</style>
