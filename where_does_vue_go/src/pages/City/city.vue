<template>
   <div class="">
      <header-city></header-city>
      <search/>
   </div>
</template>

<script type="text/ecmascript-6">
import headerCity from './components/headerCity'
import search from './components/search'
export default {
  name: 'City',
  components: {
    headerCity,
    search
  }
}
</script>

<style lang="scss">
</style>
