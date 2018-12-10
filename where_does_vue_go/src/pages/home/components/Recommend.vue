<template>
  <div class="recommend-content">
   <div class="font-title"><img class="img1" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="本周热门榜单"><span>猜你喜欢</span></div>
    <ul class="recommend-content-all">
      <li class="recommend-content-one" v-for="item in info" :key="item.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      info: [
        {id: '1', url: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', attractions: '故宫', price: '20', comments: '6354', describe: '世界五大宫之首，穿越与您近在咫尺', region: '东城区'},
        {id: '2', url: 'https://imgs.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg', attractions: '远去的恐龙', price: '150', comments: '3524', describe: '恐龙的家园，与我们一起探索', region: '朝阳区'},
        {id: '3', url: 'https://imgs.qunarzz.com/sight/p0/1711/53/53f7752ece875d00a3.img.jpg_200x200_5c006913.jpg', attractions: '龙脉温泉', price: '112', comments: '2543', describe: '温暖之地', region: '昌平区'},
        {id: '4', url: 'https://imgs.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg', attractions: '春晖园温泉度假村', price: '141', comments: '1491', describe: '北京高端温泉，价格亲民', region: '朝阳区'},
        {id: '5', url: 'https://imgs.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg', attractions: '北京野生动物园', price: '71', comments: '987', describe: '敢与森林之王近距离接触吗？', region: '朝阳区'}]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-content
    width: 100%
    height: 1rem
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
