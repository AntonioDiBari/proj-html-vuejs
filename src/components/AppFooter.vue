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
  <footer>footer</footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
</style>
