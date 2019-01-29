<template>
  <div>
    <div class="banner" @click="handleImg">
     <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number banner-icon"><span class="iconfont banner-icon">&#xe658;</span>39</div>
      </div>
    </div>
   <commen :imgs="imgs" v-show="showCom" @close="handleComClose"/>
  </div>
</template>

<script type="text/ecmascript-6">
import commen from 'commen/Commen'
export default {
  name: 'detailBanner',
  data () {
    return {
      showCom: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
    }
  },
  components: {
    commen
  },
  methods: {
    handleImg () {
      this.showCom = true
      console.log(this.showCom)
    },
    handleComClose () {
      this.showCom = false
      console.log(this.showCom)
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  width 100vw
  height 55vw
  position relative
  img
   width 100%
  .banner-info
   display flex
   position absolute
   left 0
   right 0
   bottom 0
   font-size .3rem
   line-height .6rem
   color #ffffff
   background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
   .banner-title
     flex 1
   .banner-number
     height: .32rem
     line-height: .32rem
     margin-top: .14rem
     padding: 0 .4rem
     border-radius: .2rem
     background: rgba(0, 0, 0, .8)
     font-size: .24rem
     margin-right 0
     .banner-icon
       font-size: .24rem
</style>
