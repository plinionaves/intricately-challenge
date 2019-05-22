<template>
  <div>
    <AppToolbar />
    <main class="container">

      <section class="row">
        <AppBreadcrumb class="col-12" />
      </section>

      <section class="row">
        <AppSideMenu class="col-3" />
        <router-view class="col-9" />
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

export default {
  name: 'TheDashboard',
  components: {
    AppBreadcrumb,
    AppFooter,
    AppSideMenu,
    AppToolbar
  }
}
</script>
