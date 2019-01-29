<template>
   <div class="">
     <detail-banner/>
     <detail-header/>
     <div class="content"></div>
   </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/detailBanner'
import detailHeader from './components/header'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
