<template>
   <div>
    <my-header/>
    <my-footer/>
   </div>
</template>

<script type="text/ecmascript-6">
import myHeader from './components/header'
import myFooter from './components/footer'
export default {
  name: 'Login',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="stylus" scoped>
</style>
