<script>
import AppBtn from "./AppBtn.vue";

export default {
  data() {
    return {};
  },
  components: { AppBtn },
};
</script>

<template>
  <section class="container">
    <div class="location-title">
      <span class="subtitle">LOCATIONS</span>
      <h2 class="title">Visit our Bakeries</h2>
    </div>
    <div class="row mt-5">
      <div class="col-6 pe-0">
        <img src="../assets/img/new-york-bk-600x397.jpg" alt="" />
        <div class="location-info pinkBg">
          <h5 class="title">New York</h5>
          <div class="row mt-3">
            <div class="col-4">
              <h4 class="subtitle">CALL US</h4>
              <span class="description">1.800.458.556</span>
            </div>
            <div class="col-4">
              <h4 class="subtitle">OPEN ALL WEEK</h4>
              <span class="description">9:00 AM - 6:00 PM</span>
            </div>
            <div class="col-4">
              <AppBtn :text="`View Map`" :textClass="`purple`" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 ps-0">
        <img src="../assets/img/london-bk-600x397.jpg" alt="" />
        <div class="location-info yellowBg">
          <h5 class="title">London</h5>
          <div class="row mt-3">
            <div class="col-4">
              <h4 class="subtitle">CALL US</h4>
              <span class="description">1.800.458.556</span>
            </div>
            <div class="col-4">
              <h4 class="subtitle">OPEN ALL WEEK</h4>
              <span class="description">9:00 AM - 6:00 PM</span>
            </div>
            <div class="col-4">
              <AppBtn :text="`View Map`" :textClass="`purple`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.location-title {
  text-align: center;
  margin-top: 40px;
}
section {
  margin-top: 10rem;
}
.col-6 img {
  width: 100%;
}
.location-info {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
  .description {
    font-size: 14px;
    color: black;
  }
}
.title {
  font-size: 2rem;
}
.pinkBg {
  background-color: $pink;
}
.yellowBg {
  background-color: #faf3e3;
}
</style>
