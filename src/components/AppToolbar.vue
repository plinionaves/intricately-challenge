<template>
  <header class="toolbar">
    <div class="container">
      <img
        class="toolbar__logo col-1"
        src="@/assets/logo.png"
        alt="Intricately"
      >
      <div class="form__group col-5">
          <input
            type="text"
            class="input__search"
            placeholder="Search Companies"
            :value="search"
            @keyup.enter="searchAndNavigate"
          >
          <span class="text">OR</span>
      </div>
      <div class="col-6">
        <a
          href="#"
          class="btn btn__primary--light"
        >New Smartlist</a>
        <a
          href="#"
          class="btn btn__toolbar"
        >Prospect <span class="arrow__down"></span></a>
        <a
          href="#"
          class="btn btn__toolbar"
        >Alert <span class="arrow__down"></span></a>
        <a
          href="#"
          class="btn btn__toolbar"
        >Learn <span class="arrow__down"></span></a>
      </div>
    </div>
  </header>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'AppToolbar',
  computed: {
    ...mapState(['search'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setSearch({ search: to.query.search }))
  },
  beforeRouteUpdate (to, from, next) {
    this.setSearch({ search: to.query.search })
    next()
  },
  methods: {
    ...mapActions(['setSearch']),
    searchAndNavigate ({ target: { value: search } }) {
      search = search || undefined
      this.setSearch({ search })
      this.$router.push({
        path: '/dashboard/company/table',
        query: { search }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colors';

.toolbar {
  width: 100%;
  height: 70px;
  background-color: $primary;
}

.toolbar__logo {
  margin: 12px 0;
  display: inline-block;
}

.input__search {
  min-width: 350px;
  background-color: $primary-dark;
  box-shadow: none;
  border: none;
  margin-top: 12px;
  font-size: 16px;
  color: white;
}

.text {
  color: white;
  margin-left: 20px;
  font-size: 16px;
}

.btn__toolbar {
  margin-top: 14px;
  margin-left: 10px;
  margin-right: 10px;
}

.arrow__down {
  margin-top: 5px;
  margin-left: 5px;
  border-top-color: $primary-light;
}

</style>
