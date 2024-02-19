<script>
import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="logo">
    <img src="../assets/img/avada-bakery-logo.png" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.logo {
  width: 150px;
}
</style>
