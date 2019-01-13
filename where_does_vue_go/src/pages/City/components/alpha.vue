<template>
   <div class="no">
     <ul class="list">
       <li class="item"
       v-for="i of ress"
       :key="i"
       :ref='i'
       @click="handle"
       @touchstart="handletouchstart"
       @touchmove="handletouchmove"
       @touchend="handletouchend">{{i}}</li>
     </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'alpha',
  data () {
    return {
      done: false,
      start: null,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    ress () {
      let arr = []
      for (let i in this.cities) {
        arr.push(i)
      }
      return arr
    }
  },
  updated () {
    this.start = this.$refs['A'][0].offsetTop
  },
  methods: {
    handle (e) {
      this.$emit('change', e.target.innerText)
    },
    handletouchstart () {
      this.done = true
    },
    handletouchmove (e) {
      if (this.done === true) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 函数节流操作
          const move = e.touches[0].clientY - 79
          const idx = Math.floor((move - this.start) / 20)
          if (idx >= 0 && idx <= 25) {
            this.$emit('change', this.ress[idx])
          }
        }, 16)
      }
    },
    handletouchend () {
      this.done = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  font-size .32rem
  text-align right
  list-style none
  position absolute
  width .4rem
  right 0
  display flex
  flex-flow column
  justify-content center
  align-items center
  height 85vh
  opacity 0.6
  .item
    line-height .4rem
    text-align center
    color #666
</style>
