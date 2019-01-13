<template>
   <div class="list" ref="wrapper">
     <div>
     <div class="area">
      <div class="title border-tb">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
 <div class="area">
      <div class="title border-tb">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
 <div class="area" v-for="(item,k) in cities" :key="k" :ref="k">
      <div class="title border-tb">{{k}}</div>
      <ul class="item-list">
        <li class="item" v-for="i of item" :key="i.id">{{i.name}}</li>
      </ul>
      </div>
      </div>
     </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
  name: 'list',
  props: {
    hotCities: Array,
    cities: Object,
    res: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    res () {
      if (this.res) {
        this.scroll.scrollToElement(this.$refs[this.res][0])// 点击字母跳到相应的位置
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  font-size .32rem
  color #666
  position absolute
  left 0
  top 1.58rem
  right 0
  bottom 0
  overflow hidden
.title
  line-height .54rem
  background #eee
  padding-left .2rem
  font-size .26rem
  border 1px #ccc solid
  box-sizing border-box
  margin-top -1px
.button-list
  font-size .32rem
  overflow: hidden
  padding: .1rem .6rem .1rem .1rem
  .button-wrapper
    float: left
    width: 33.33%
    .button
      margin: .1rem
      padding: .1rem 0
      text-align: center
      border: .02rem solid #ccc
      border-radius: .06rem
.item-list
  .item
    line-height .54rem
    padding-left .2rem
    border-bottom 1px solid #ccc
</style>
