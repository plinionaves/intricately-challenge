<template>
  <AppTransition name="fade">
    <div
      v-if="show"
      class="modal"
    >
      <section class="modal__content">
        <slot />
      </section>
    </div>
  </AppTransition>
</template>

<script>

import AppTransition from './AppTransition'

export default {
  name: 'Modal',
  components: {
    AppTransition
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'show',
    event: 'hide'
  }
}
</script>

<style lang="scss" scoped>

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(0, 0, 0, 0.5);
}

.modal__content {
  position: relative;
  top: 250px;
  width: 500px;
  height: auto;
  padding: 30px;
  margin: auto;
  background-color: white;
}

</style>
