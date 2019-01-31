<template>
   <div class="">
      <transition>
         <slot></slot>
      </transition>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
   opacity 0
.v-enter-active, .v-leave-active
   transition opacity .5s
</style>
