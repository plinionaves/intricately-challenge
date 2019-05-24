<template>
  <div class="root">
    <AppToolbar />
    <main class="container">

      <AppBreadcrumb class="col-12" />

      <section class="col-12 container">
        <AppSideMenu class="col-3" />
        <AppTransition name="slide" class="col-9">
          <router-view />
        </AppTransition>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script>

import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppFooter from '@/components/AppFooter'
import AppSideMenu from '@/components/AppSideMenu'
import AppToolbar from '@/components/AppToolbar'
import AppTransition from '@/components/AppTransition'

export default {
  name: 'TheDashboard',
  components: {
    AppBreadcrumb,
    AppFooter,
    AppSideMenu,
    AppToolbar,
    AppTransition
  }
}
</script>

<style lang="scss" scoped>
.root {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 130px;
  grid-row-gap: 14px;
}
</style>
