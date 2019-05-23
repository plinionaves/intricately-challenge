<template>
  <transition
    :name="name"
    :mode="mode"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'AppTransition',
  props: {
    name: {
      type: String,
      default: 'fade'
    },
    mode: {
      type: String,
      default: 'out-in'
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .2s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
