<template>
  <div class="row">

    <div class="company__logo col-1">
      <img
        class="company__logo__img"
        src="@/assets/logo-microsoft.svg"
        alt="Microsoft"
      >
    </div>

    <div class="col-11">
      <h1 class="title">Microsoft</h1>
        <p class="subtitle">
          <font-awesome-icon icon="map-marker-alt" />
          <span>Redmond, WA USA</span>
        </p>
    </div>

    <p class="col-12 description">
      At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.
      Our mission is grounded in both the world in which we live and the future we strive to create.
      <a href="#">View more...</a>
    </p>

    <div class="box col-6">
      <h5 class="box__title row">Activities</h5>
      <ActivityItem
        class="row"
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </div>

    <div class="col-6">

      <div class="box row">
        <h5 class="box__title border--bottom col-12">Similar Companies</h5>
        <ul class="company col-12">
          <CompanyItem
            v-for="company in companies"
            :key="company.id"
            :company="company"
          ></CompanyItem>
        </ul>
      </div>

      <div class="box row">
        <h5 class="box__title border--bottom col-12">Company Spend History</h5>
        <div class="company col-12">
          <img src="@/assets/chart.png" alt="Chart">
        </div>
      </div>

      <div class="box row">
        <h5 class="box__title border--bottom col-12">Company Spend History</h5>
        <ul class="company col-12">
          <CompanyItem
            v-for="history in historic"
            :key="history.id"
            :company="history"
          ></CompanyItem>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import { ACTIVITIES, COMPANIES, HISTORIC } from '@/mocks/company-data'
import ActivityItem from '@/components/ActivityItem'
import CompanyItem from '@/components/CompanyItem'

export default {
  name: 'CompanyPage',
  components: {
    ActivityItem,
    CompanyItem
  },
  data: () => ({
    activities: [],
    companies: [],
    historic: []
  }),
  created () {
    this.activities = ACTIVITIES
    this.companies = COMPANIES
    this.historic = HISTORIC
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colors';

.box {
  margin-top: 14px; /* hack, remove */
}

.border--bottom {
  border-bottom: 1px solid $light;
}

.title {
  margin: 0;
  color: $secondary-dark;
}

.subtitle {
  margin-top: -2px;
  font-size: 0.9rem;
  span {
    margin-left: 5px;
  }
}

.description {
  color: $secondary-dark;
  margin: 15px 0;
}

.company {
  list-style-type: none;
  padding: 15px;
}
</style>
