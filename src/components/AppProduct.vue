<script>
import { store } from "../store/index.js";
import AppBtn from "./AppBtn.vue";
import AppSlider from "./AppSlider.vue";
import AppEvent from "./AppEvent.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppBtn, AppSlider, AppEvent },
};
</script>

<template>
  <section class="wrapper">
    <div class="row">
      <div class="col-4">
        <span class="subtitle">OUR PRODUCT</span>
        <h2 class="title mt-3 mb-5">
          All our delectble pastries are backed fresh in our Kitchen very
          morning, and are made with all natural, all organic ingredients.
        </h2>
        <AppBtn :text="`Start Shopping`" :textClass="`white`" />
      </div>
      <div class="col-8">
        <AppSlider
          :numberSlide="2"
          :hoverClass="'show-info'"
          :description="false"
        />
      </div>
    </div>
    <AppEvent />
    <div class="row justify-content-between">
      <div class="col-3">
        <h2 class="title mt-3">Find a freshly baked product perfect for you</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          pariatur, vel recusandae accusantium nostrum modi ipsa consequuntur?
          Asperiores inventore.
        </p>
        <AppBtn :text="`Show All Products`" :textClass="`white`" />
      </div>
      <div class="col-8">
        <AppSlider
          :numberSlide="4"
          :hoverClass="'show-menu'"
          :description="true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.title {
  font-size: 1.7rem;
}
.row {
  margin-top: 100px;
}
.col-4,
.col-8,
.col-3,
.col-9 {
  padding: 0;
}

.col-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
