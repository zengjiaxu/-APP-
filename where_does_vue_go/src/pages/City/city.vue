<template>
   <div class="">
      <header-city></header-city>
      <search/>
      <list/>
      <alpha/>
   </div>
</template>

<script type="text/ecmascript-6">
import headerCity from './components/headerCity'
import search from './components/search'
import list from './components/list'
import alpha from './components/alpha'
export default {
  name: 'City',
  components: {
    headerCity,
    search,
    list,
    alpha
  }
}
</script>

<style lang="scss">
</style>
