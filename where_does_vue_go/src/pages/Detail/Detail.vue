<template>
   <div class="">
     <detail-banner
     :sightname="sightName"
     :bannerImg="bannerImg"
     :gallaryImgs="gallaryImgs"
     />
     <detail-header/>
     <detail-list :list="categoryList"/>
     <div class="content"></div>
   </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/detailBanner'
import detailHeader from './components/header'
import detailList from './components/detailList'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList,
    categoryList: {}
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    requestData () {
      axios.get('/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getInfo)
    },
    getInfo (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.requestData()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
