<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
    <div class="icons-content" v-for="i in page" :key="i.id"><img :src="i.url"/><p class="fonts">{{i.names}}</p></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.list.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/textflow.styl"
  .icons
    width: 100vw
    height: 0
    padding-bottom: 50vw
    margin-top:.4rem
    .icons-content
      position: relative
      width: 25%
      padding-bottom: 25%
      float: left
      text-align: center
      .fonts
        width: 100%
        position: absolute;
        bottom :0
        font-size : .28rem
        text-align: center
        ellipse()
      img
        position: absolute
        width: 80%
        left: 0
        right: 0
        top:0
        bottom:0
        margin :0 auto
</style>
