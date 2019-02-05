<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swaperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend></home-weekend>
    <my-foot/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/HomeWeekend'
import myFoot from './components/foot'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend,
    myFoot
  },
  data () {
    return {
      swaperList: [],
      iconList: [],
      recommendList: [],
      lastCity: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get(`/static/mock/index.json?${this.city}`).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret === true && res.data) {
        this.swaperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
</style>
