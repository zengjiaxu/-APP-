<template>
   <div class="">
      <header-city></header-city>
      <search/>
      <list :hotCities="hotCities" :cities="cities" :res="res"/>
      <alpha :cities="cities" @change="handleLetter"/>
   </div>
</template>

<script type="text/ecmascript-6">
import headerCity from './components/headerCity'
import search from './components/search'
import list from './components/list'
import alpha from './components/alpha'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      res: ''
    }
  },
  components: {
    headerCity,
    search,
    list,
    alpha
  },
  methods: {
    handleLetter (res) {
      this.res = res
    }
  },
  mounted () {
    axios.get('/static/mock/city.json').then((res) => {
      if (res.data.ret === true && res.data) {
        res = res.data.data
        this.hotCities = res.hotCities
        this.cities = res.cities
      }
    })
  }
}
</script>

<style lang="scss">
</style>
