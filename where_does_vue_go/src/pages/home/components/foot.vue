<template>
   <div class="warning">
      <span class="font-price">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
      <div class="container">
         <ul class="real-foot">
            <li>机票</li>
            <li>酒店</li>
            <li>公寓</li>
            <li>更多</li>
         </ul>
      </div>
      <div class="detail-info">
         <ul>
            <router-link to="/login" tag="li" v-for="(item,idx) of msg" :key="idx">{{item}}</router-link>
         </ul>
      </div>
      <div>
         <ul class="banben">
            <li class="touch">触屏版</li>
            <li>电脑版</li>
         </ul>
      </div>
      <p>Qunar 京ICP备05021087意见反馈</p>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Foot',
  data () {
    return {
      msg: ['登录', '我的订单', '最近浏览', '关于我们']
    }
  }
}
</script>

<style lang="stylus" scoped>
.warning
   font-size .2rem
   margin-top .5rem
   color #616161
   .font-price
      font-weight: bold
      margin-left: .3rem
   .container
      background #f3f3f3
   .real-foot
      overflow hidden
      margin 0 auto
      margin-top .2rem
      width 252px
      color #acacac
      background #f3f3f3
      li
         float left
         list-style none
         text-align center
         width 63px
         height 21px
         font-size .3rem
         margin 0 auto
   .detail-info
      overflow hidden
      border-bottom 1px solid #cacaca
      background #f3f3f3
      ul
         li
            width 76px
            line-height 39px
            float left
            list-style none
            color #00bcd4
            font-style .28rem
            font-size 14px
            text-align center
   .banben
      text-align center
      background #f3f3f3
      li
         display inline-block
         margin .2rem .2rem
         font-size 14px
         color #00bcd4
       .touch
         color black
   p
      font-size 14px
      color #616161
      background #f3f3f3
      text-align center
</style>
