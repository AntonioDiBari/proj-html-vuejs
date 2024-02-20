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
    <div class="row g-4">
      <div class="col-3">
        <div class="card">
          <img src="../assets/img/social-1.jpg" alt="" />
        </div>
      </div>
      <div class="col-6">
        <div class="social-card">
          <div>
            <h4 class="subtitle">MADE FOR SHARING</h4>
            <h2 class="title mb-3">Let's stay in touch</h2>
            <AppBtn :text="`Follow Us`" :textClass="`white`" :logoIg="true" />
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img src="../assets/img/social-2.jpg" alt="" />
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img src="../assets/img/social-3.jpg" alt="" />
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img src="../assets/img/social-5.jpg" alt="" />
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img src="../assets/img/social-4.jpg" alt="" />
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img src="../assets/img/social-6.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
  margin-top: 7rem;
}
.social-card {
  background-color: $pink;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 2rem;
}
</style>
