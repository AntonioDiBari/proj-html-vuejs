<script>
import { store } from "../store/index.js";
import AppProduct from "./AppProduct.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppProduct },
};
</script>

<template>
  <AppProduct />
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
</style>
