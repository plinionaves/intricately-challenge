<template>
  <li class="company__item row">
    <div class="company__item__logo col-2">
      <img
        class="company__item__logo__img"
        :src="company.logo"
        :alt="company.name"
      >
    </div>
    <div
      class="col-10"
      :class="{ 'pt-1': !company.note }"
    >
      <a
        class="company__item__link col-12"
        href="#"
      >{{ company.name }}</a>
      <p
        class="company__item__note col-12"
        v-if="company.note"
      >{{ company.note }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CompanyItem',
  props: {
    company: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/components';

.company__item {
  padding-bottom: 7px;
}

.company__item__logo {
  @extend .company__logo;
  width: 45px;
  height: 45px;
  padding: 8px;
}

.company__item__logo__img {
  @extend .company__logo__img;
}

.company__item__link, .company__item__note {
  text-decoration: none;
}

</style>
