<template>
   <div class="register">
     <register/>
     <detail/>
     <my-footer/>
   </div>
</template>

<script type="text/ecmascript-6">
import register from './components/header'
import detail from './components/detail'
import myFooter from '@/pages/Login/components/footer'
export default {
  name: 'Register',
  components: {
    register,
    detail,
    myFooter
  }
}
</script>

<style lang="stylus" scoped>
.register
  background #f3f9fc
  height 100vh
</style>
