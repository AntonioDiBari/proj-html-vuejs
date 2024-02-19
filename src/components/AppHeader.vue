<script>
import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  emits: [],
};
</script>

<template>
  <header>header</header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
</style>
