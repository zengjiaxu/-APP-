<template>
  <div>
    <div class="banner" @click="handleImg">
     <img :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightname}}</div>
        <div class="banner-number banner-icon"><span class="iconfont banner-icon">&#xe658;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
   <commen :imgs="gallaryImgs" v-show="showCom" @close="handleComClose"/>
  </div>
</template>

<script type="text/ecmascript-6">
import commen from 'commen/Commen'
export default {
  name: 'detailBanner',
  props: {
    sightname: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showCom: false
    }
  },
  components: {
    commen
  },
  methods: {
    handleImg () {
      this.showCom = true
    },
    handleComClose () {
      this.showCom = false
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
