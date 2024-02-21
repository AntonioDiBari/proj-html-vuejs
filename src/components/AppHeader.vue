<script>
import { store } from "../store/index.js";
import AppLogo from "./AppLogo.vue";
import AppBtn from "./AppBtn.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppLogo, AppBtn },
  props: {
    navLinks: Array,
  },
};
</script>

<template>
  <header>
    <div class="header-menu">
      <AppLogo />

      <ul class="mb-4 fw-medium">
        <li
          v-for="link in navLinks.filter((link, index) => {
            return index != navLinks.length - 1;
          })"
        >
          {{ link.toUpperCase() }}
        </li>
        <li><font-awesome-icon icon="fa-solid fa-cart-shopping" /></li>
      </ul>
    </div>
    <div class="hero-tags mt-4">
      <div class="tag">
        <font-awesome-icon icon="fa-solid fa-folder-open" class="fs-4" />
        <span> Demos</span>
      </div>
      <div class="tag">
        <span class="tag-price"><sup>$</sup><var>39</var></span>
        <span> On Sale</span>
      </div>
    </div>
    <div class="container">
      <div class="hero-section">
        <span class="subtitle">FRESH & TASTY BAKERY EVERY DAY</span>
        <h2 class="title">The perfect Fresh Bread</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          voluptatum aut facilis sunt porro nam totam iste.
        </p>
        <AppBtn :text="`Explore our products`" :textClass="`purple`" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

header {
  //   background-color: $pink3;
  background-image: url("../assets/img/hero-header-bakery.jpg");
  background-position: 75% 25%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 700px;
  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 7px 0 0 25px;
    ul {
      color: $purple;
      font-size: 9px;
      letter-spacing: 0.5px;
      margin-bottom: 25px;
    }
    li {
      margin-right: 30px;
      padding: 25px 0 5px 0;
      cursor: pointer;
    }
    li:hover {
      border-bottom: 2px solid $purple;
    }
  }
  .hero-section {
    width: 350px;
  }

  .hero-tags {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    .tag {
      height: 50px;
      width: 50px;
      cursor: pointer;
      text-align: center;
      background-color: white;
      margin-right: 15px;
      border-radius: 5px;
      font-size: 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .tag-price {
        color: #65bc7b;
        font-size: 20px;
        font-weight: bolder;
      }
    }
    .tag:hover {
      box-shadow: 0px 0px 10px 0px grey;
    }
  }
}
</style>
