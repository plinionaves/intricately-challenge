<template>
  <p class="breadcrumb">{{ breadcrumbs }}</p>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  computed: {
    breadcrumbs () {
      return this.$route.path
        .replace('/', '')
        .split('/')
        .join(' / ')
        .toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colors';

.breadcrumb {
  color: $secondary;
  font-size: 12px;
}
</style>
