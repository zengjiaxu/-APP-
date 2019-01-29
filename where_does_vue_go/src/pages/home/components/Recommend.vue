<template>
  <div class="recommend-content">
   <div class="font-title"><img class="img1" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="本周热门榜单"><span>猜你喜欢</span></div>
    <ul class="recommend-content-all">
      <router-link :to="'/Detail/' + item.id" tag="li" class="recommend-content-one" v-for="item in list" :key="item.id">
        <div class="recommend-content-img">
          <img class="recommend-content-img-info" :src="item.url" alt="">
        </div>
        <div class="recommend-content-info">
          <div class="recommend-content-div one">{{item.attractions}}</div>
          <div class="recommend-content-div two">
            <span class="iconfont">&#xe60c;</span>
            <span class="iconfont">&#xe60c;</span>
            <span class="iconfont">&#xe60c;</span>
            <span class="iconfont">&#xe60c;</span>
            <span class="iconfont">&#xe60c;</span>
            <span class="span-font"><span>{{item.comments}}</span>条评论</span>
          </div>
          <div class="recommend-content-div three">
            <span class="price"><span class="amount"><span class="qian">¥</span>{{item.price}}</span>起</span>
            <span class="region">{{item.region}}</span>
          </div>
          <div class="recommend-content-div four">
            <p class="region-info">{{item.describe}}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-content
    width: 100%
    .recommend-content-img-info
      width: 2.3rem
      height: 2.3rem
    .img1
      display inline-block
      width: .3rem
      height: .3rem
      margin-left:.1rem
    .font-title
      line-height .8rem
      font-size .32rem
    .recommend-content-one
      width: 100%
      overflow hidden
      .recommend-content-img
        width: 2.3rem
        height: 3rem
        float left
      .recommend-content-info
        width: 3.5rem
        height: 3rem
        float left
        margin-left .3rem
        .recommend-content-div
          width: 100%
          height: .5rem
          margin-top:.1rem
          font-size .4rem
          .span-font
            font-size .26rem
        .three
          font-size .27rem
          .amount
            font-size .4rem
            color #ff8300
          .qian
            font-size .27rem
            color #ff8300
        .four
          margin-top .4rem
          .region-info
            font-size .27rem
            color red
        .iconfont
          font-size .2rem

</style>
