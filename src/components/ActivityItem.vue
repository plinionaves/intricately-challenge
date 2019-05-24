<template>
  <div class="row activity">
    <div class="col-3 activity__time">{{ activity.time }}</div>
    <div
      class="col-1 activity__icon"
      :style="{ 'background-color': activity.color }"
    >
      <font-awesome-icon
        class="activity__icon__svg"
        :icon="activity.icon"
      ></font-awesome-icon>
    </div>
    <div class="col-8">
      <p class="activity__description">
        <a href="#">{{ activity.description }}</a>
      </p>
      <p>{{ activity.note }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityItem',
  props: {
    activity: {
      type: Object, /* can be a model here */
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colors';

p, a {
  line-height: 1.4rem;
}

.activity {
  border-top: 1px solid $light;
  padding: 15px 7px;
}

.activity__time {
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
}

.activity__icon {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity__icon__svg {
  font-size: 14px;
}

.activity__description {
  margin: 0;
  a {
    text-decoration: none;
  }
}

</style>
