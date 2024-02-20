<script>
import { store } from "../store/index.js";
import AppProduct from "./AppProduct.vue";
import AppInfo from "./AppInfo.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppProduct, AppInfo },
};
</script>

<template>
  <AppProduct />
  <AppInfo />
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
</style>
