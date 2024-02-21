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
  methods: {
    fetchNavLinks() {
      axios.get(store.apiUriNavLinks).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          store.navLinks.push(response.data[i].name);
        }
      });
    },
    fetchSlides() {
      axios.get(store.apiUriSlides).then((response) => {
        store.slides2 = response.data;
      });
    },
    fetchSocials() {
      axios.get(store.apiUriSocial).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          store.socials.push(response.data[i].name);
        }
      });
    },
  },
  components: { AppHeader, AppMain, AppFooter },
  created() {
    this.fetchNavLinks();
    // this.fetchSlides();
    this.fetchSocials();
  },
};
</script>

<template>
  <AppHeader :nav-links="store.navLinks" />
  <AppMain />
  <AppFooter :nav-links="store.navLinks" :socials="store.socials" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
