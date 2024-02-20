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
  <div class="event-title">
    <span class="subtitle"> CORPORATE & WEDDINGS </span>
    <h2 class="title">Baking Special Moments</h2>
  </div>
  <div class="row gx-5 mt-5">
    <div class="col-6">
      <div class="image-event">
        <img src="../assets/img/corporate-bg.jpg" alt="" class="front-img" />
        <div class="back-img">
          <img src="../assets/img/corporate-hover-bg.jpg" alt="" />
          <div class="image-info text-center">
            <span class="subtitle text-light">INTERNATIONAL BAKERY</span>
            <h3>Corporate Events</h3>
            <AppBtn :text="`Expolre more`" :textClass="`white`" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="image-event">
        <img src="../assets/img/wedding-bg.jpg" alt="" class="front-img" />
        <div class="back-img">
          <img src="../assets/img/wedding-hover-bg.jpg" alt="" />
          <div class="image-info text-center">
            <span class="subtitle text-light">PRIVATE DINING HALL</span>
            <h3>Weddings & Parties</h3>
            <AppBtn :text="`Expolre more`" :textClass="`white`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.event-title {
  text-align: center;
  margin-top: 40px;
}
.front-img {
  display: block;
}
.back-img {
  position: relative;
  display: none;
}
.image-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h3 {
    color: white;
    font-size: 2rem;
  }
}
.image-event:hover > .front-img {
  display: none;
}
.image-event:hover > .back-img {
  display: block;
}
</style>
