<script>
import { store } from "../store/index.js";

import AppProduct from "./AppProduct.vue";
import AppInfo from "./AppInfo.vue";
import AppLocation from "./AppLocation.vue";
import AppSocial from "./AppSocial.vue";
import AppShop from "./AppShop.vue";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppProduct, AppInfo, AppLocation, AppSocial, AppShop },
};
</script>

<template>
  <AppProduct />
  <AppInfo />
  <AppLocation />
  <AppSocial />
  <AppShop />
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
</style>
