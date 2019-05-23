<template>
  <div>
    <AppToolbar />
    <main class="container">

      <section class="row">
        <AppBreadcrumb class="col-12" />
      </section>

      <section class="row">
        <AppSideMenu class="col-3" />
        <AppTransition name="slide">
        <router-view class="col-9" />
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
