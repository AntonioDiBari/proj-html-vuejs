<script>
import { store } from "../store/index.js";
import AppProduct from "./AppProduct.vue";
import AppInfo from "./AppInfo.vue";
import AppLocation from "./AppLocation.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppProduct, AppInfo, AppLocation },
};
</script>

<template>
  <AppProduct />
  <AppInfo />
  <AppLocation />
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
</style>
