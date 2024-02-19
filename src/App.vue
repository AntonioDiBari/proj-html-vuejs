<script>
import axios from "axios";
import { store } from "./store/index";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <AppHeader />
  <!-- <AppMain />
  <AppFooter /> -->
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
