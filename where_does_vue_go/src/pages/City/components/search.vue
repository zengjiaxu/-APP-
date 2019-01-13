<template>
   <div>
   <div class="search-city">
      <input type="text" placeholder="输入城市名或拼音" v-model="msg">
   </div>
   <div class="search-content" ref="search" v-show="msg">
      <ul>
         <li class="l" v-for="item of list" :key="item.id">{{item.name}}</li>
         <li class="l" v-show="hasLen">未找到匹配的数据</li>
      </ul>
   </div>
   </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      msg: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasLen () {
      return this.msg && this.list.length === 0
    }
  },
  watch: {
    msg () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.list = []
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.msg) !== -1 || val.name.indexOf(this.msg) !== -1) {
              this.list.push(val)
            }
          })
        }
      }, 16)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search-city
  height .72rem
  background $bgColor
  padding 0 .1rem
  box-sizing border-box
  input
    line-height .62rem
    border-radius .06rem
    height .62rem
    width 100%
    background #fff
    font-size .3rem
    text-align center
    float left
    color #666
    padding 0 .1rem
.search-content
   background blue
   position absolute
   left 0
   right 0
   bottom 0
   top 79px
   overflow hidden
   z-index 1
   font-size .32rem
   background #eee
   .l
     box-sizing border-box
     border 1px #eee solid
     color #666
     background #fff
</style>
