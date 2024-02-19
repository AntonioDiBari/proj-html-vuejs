<script>
import { store } from "../store/index.js";
import AppLogo from "../components/AppLogo.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppLogo },
};
</script>

<template>
  <header>
    <div class="header-menu">
      <AppLogo />

      <ul class="mb-4 fw-medium">
        <li
          v-for="link in store.navLinks.filter((link, index) => {
            return index != store.navLinks.length - 1;
          })"
        >
          {{ link.toUpperCase() }}
        </li>
        <li><font-awesome-icon icon="fa-solid fa-cart-shopping" /></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

header {
  background-color: $pink3;
  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 7px 25px 0 25px;
  }
  ul {
    color: $purple;
    font-size: 9px;
    letter-spacing: 0.5px;
    margin-bottom: 25px;
  }
  ul li {
    margin-right: 30px;
    padding: 25px 0 5px 0;
    cursor: pointer;
  }
  .header-menu ul li:hover {
    border-bottom: 2px solid $purple;
  }
}
</style>
