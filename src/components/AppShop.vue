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
  <section>
    <h4 class="subtitle">TRY OUR SENSETIONAL PRODUCTS</h4>
    <h2 class="shop-title mb-5">Order for pick-up or delivery to your home</h2>
    <AppBtn
      :text="`Shop now`"
      :textClass="`purple`"
      :logoIg="false"
      class="shop-btn"
    />
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
section {
  margin: 7rem 0;
  background-image: url("../assets/img/call-to-action-bg.jpg");
  background-repeat: no-repeat;
  height: 400px;
  object-fit: cover;
  background-size: 120% 100%;
  background-position: center;
  padding: 6rem 38rem 6rem 15rem;
  h4 {
    color: lightgray;
  }
  .shop-title {
    font-size: 2.5rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: white;
  }
  .shop-btn {
    font-size: 0.8rem;
    padding: 10px 35px;
  }
}
</style>
