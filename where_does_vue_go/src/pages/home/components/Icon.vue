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
  data () {
    return {
      msg: [
        {id: '1', url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', names: '景点门票'},
        {id: '2', url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', names: '北京必游'},
        {id: '3', url: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png', names: '野生动物园'},
        {id: '4', url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', names: '一日游'},
        {id: '5', url: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', names: '泡温泉'},
        {id: '6', url: 'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png', names: '打卡圣地'},
        {id: '7', url: 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif', names: '低价联票'},
        {id: '8', url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png', names: '文化古迹'},
        {id: '9', url: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png', names: '动物园'},
        {id: '10', url: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png', names: '全部玩乐 '}
      ],
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.msg.forEach((value, index) => {
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
    width: 100%
    height: 0
    padding-bottom: 50%
    margin-top:.2rem
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
