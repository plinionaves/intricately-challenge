<template>
  <div>
    <div class="form__group">
      <input
        type="search"
        placeholder="Search"
        @input="search"
      >
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>
            Company
            <span
              class="arrow__up"
              :class="selected('name', 'asc')"
              @click="sort('name', 'asc')"
            ></span>
            <span
              class="arrow__down"
              :class="selected('name', 'desc')"
              @click="sort('name', 'desc')"
            ></span>
          </th>
          <th>
            Location
            <span
              class="arrow__up"
              :class="selected('location', 'asc')"
              @click="sort('location', 'asc')"
            ></span>
            <span
              class="arrow__down"
              :class="selected('location', 'desc')"
              @click="sort('location', 'desc')"
            ></span>
          </th>
          <th>
            Category
            <span
              class="arrow__up"
              :class="selected('category', 'asc')"
              @click="sort('category', 'asc')"
            ></span>
            <span
              class="arrow__down"
              :class="selected('category', 'desc')"
              @click="sort('category', 'desc')"
            ></span>
          </th>
          <th>
            Spend
            <span
              class="arrow__up"
              :class="selected('spend', 'asc')"
              @click="sort('spend', 'asc')"
            ></span>
            <span
              class="arrow__down"
              :class="selected('spend', 'desc')"
              @click="sort('spend', 'desc')"
            ></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="filteredCompanies.length > 0">
          <tr
            v-for="company in filteredCompanies"
            :key="company.id"
          >
            <td>
              <router-link
                :to="`/dashboard/companies/${company.id}`"
              >{{ company.name }}</router-link>
            </td>
            <td>{{ company.location }}</td>
            <td>{{ company.category }}</td>
            <td :title="formatCurrency(company.spend)">
              <span
                v-for="(dot, key) in getSpendDots(company.spend)"
                :key="`${dot}-${key}`"
                :class="['dot', dot]"
              ></span>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">No companies.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { currencyFormatter } from '@/utils'

export default {
  name: 'CompanyTable',
  computed: {
    ...mapGetters({ filterCompanies: 'filteredCompanies' }),
    ...mapGetters(['higherSpending']),
    filteredCompanies () {
      return this.filterCompanies(this.filters)
    }
  },
  data: () => ({
    filters: {
      searchTerm: '',
      field: 'name',
      orderBy: 'asc'
    }
  }),
  created () {
    this.getCompanies()
  },
  methods: {
    ...mapActions(['getCompanies']),
    formatCurrency (value) {
      return currencyFormatter().format(value)
    },
    getSpendDots (spend) {
      const percent = spend / this.higherSpending
      const greenDots = Math.round(6 * percent)
      return new Array(6)
        .fill('dot--green', 0, greenDots)
        .fill('dot--gray', greenDots, 6)
    },
    search (event) {
      this.filters.searchTerm = event.target.value
    },
    sort (field, orderBy) {
      this.filters.field = field
      this.filters.orderBy = orderBy
    },
    selected (field, orderBy) {
      return this.filters.field === field && this.filters.orderBy === orderBy
        ? 'arrow--selected'
        : ''
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colors';

.arrow__up {
  margin-left: -10px; /* hack (remove) */
}

.arrow__down {
  margin-top: 7px; /* hack (remove) */
}

input {
  width: 100%;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid $light;

  thead tr {
    border-bottom: 1px solid $light;
    th {
      background-color: $ultra-light;
    }
  }

  thead tr th, tbody tr td {
    font-size: 16px;
    font-weight: normal;
    color: #333;
    padding: 20px 7px;
    text-align: left;
    border-right: 1px solid $light;
    a {
      text-decoration: none;
      color: $primary;
    }
  }

  tbody tr:nth-child(even) {
    background-color: $ultra-light;
  }
}

</style>
