<template>
  <aside>
    <ul class="links">
      <li
        class="links__item"
        v-for="link in links"
        :key="link.url"
      >
        <router-link
          class="links__item__link"
          active-class="links__item__link--active"
          :to="link.url"
        >
          {{ link.title | uppercase }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AppSideMenu',
  data: () => ({
    links: [
      { title: 'Company Data', url: '/dashboard/company/data' },
      { title: 'Company Table', url: '/dashboard/company/table' },
      { title: 'Company Page', url: '/dashboard/company/page' }
    ]
  })
}
</script>

<style lang="scss" scoped>

@import '../scss/colors';
@import '../scss/variables';

.links {
  list-style-type: none;
  border-radius: $radius;
}

.links__item:first-child {
  .links__item__link {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }
}

.links__item:last-child {
  .links__item__link {
    border-bottom: 1px solid $light;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}

.links__item__link {
  display: block;
  text-decoration: none;
  color: $primary;
  padding: 20px 15px;
  border: 1px solid $light;
  border-bottom: none;
  font-size: 14px;
}

.links__item__link--active {
  border-left: 3px solid $primary;
  color: #333;
  background-color: $ultra-light;
}

</style>
