<script>
import { store } from "../store/index.js";
import AppBtn from "./AppBtn.vue";
import AppSlider from "./AppSlider.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppBtn, AppSlider },
};
</script>

<template>
  <section class="wrapper">
    <div class="row">
      <div class="col-4">
        <span class="subtitle">OUR PRODUCT</span>
        <h2 class="title mt-3">
          All our delectble pastries are backed fresh in our Kitchen very
          morning, and are made with all natural, all organic ingredients.
        </h2>
        <AppBtn :text="`Start Shopping`" :textClass="`white`" />
      </div>
      <div class="col-8">
        <AppSlider :numberSlide="2" :hoverClass="'show-info'" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.title {
  font-size: 1.7rem;
  margin-bottom: 50px;
}

.row {
  margin: 100px 0;
}
</style>
