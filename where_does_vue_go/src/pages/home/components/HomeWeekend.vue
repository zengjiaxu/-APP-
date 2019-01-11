<template>
  <div class="recommend-content">
   <div class="font-title">
     <span>周末去哪儿</span>
     </div>
    <ul class="recommend-content-all">
      <li class="recommend-content-one" v-for="item in info" :key="item.id">
        <div class="recommend-content-img">
          <img class="recommend-content-img-info" :src="item.url" alt="">
        </div>
        <div class="recommend-content-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-detail">{{item.info}}</p>
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
        {id: '1', url: 'http://img1.qunarzz.com/sight/source/1505/ef/815eec316c47c4.jpg_r_640x214_5bf7f999.jpg', title: '济南打卡', info: '名山古寺，清泉旧巷，就是心中的济南'},
        {id: '2', url: 'http://img1.qunarzz.com/sight/source/1605/5a/3333d5cc81812d.jpg_r_640x214_bda46c1a.jpg', title: '山东泡汤圣地', info: '泉城泉景泡汤圣地等你来，这个冬日将温暖泉给你，让你美美哒开开心心的度过这个美好冬季'},
        {id: '3', url: 'http://img1.qunarzz.com/sight/source/1505/87/b46b43303b585c.jpg_r_640x214_af2aa659.jpg', title: '泉城泉景知多少', info: '领略泉城的独特魅力，一座老城有山有水，暖暖的阳光滋润着大地，这么美好的画面啊'},
        {id: '4', url: 'http://img1.qunarzz.com/sight/source/1505/94/f48c88a43966be.jpg_r_640x214_629e5387.jpg', title: '博物馆中认识', info: '想真正了解青岛，博物馆非去不可，寻访青岛啤酒发源地，体验到酿酒过程及工艺流程'},
        {id: '5', url: 'http://img1.qunarzz.com/sight/source/1507/c0/972d4ef88051a2.jpg_r_640x214_aac8f120.jpg', title: '亲子游天地', info: '周末带宝贝在室外赏遍民俗，尝遍野外的百态，让孩子和你一起度过一个美好愉快的周末'}]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-content
    width: 100%
    font-size:.1rem
    .font-title
      font-size .32rem
      background #cccccc
    .recommend-content-img-info
      width: 100%
      height: 2.3rem
      .recommend-content-img
        width: 100%
        height: 3rem
        float left
    recommend-content-info
        width :100%
        height :.1rem
      .info-title
        font-size .3rem
        color #212121
        margin-left .2rem
        height .5rem
      .info-detail
        font-size: .2rem
        color: #616161
        margin-left .2rem
        height .4rem
</style>
