<script>
export default {
  data() {
    return {};
  },
  props: {
    text: String,
    textClass: String,
  },
};
</script>

<template>
  <button :class="textClass" class="button">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.button {
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  font-size: 11px;
  &.purple {
    color: $purple;
    background-color: white;
  }
  &.purple:hover {
    color: white;
    background-color: $purple;
  }
  &.white {
    color: white;
    background-color: $purple;
  }
  &.white:hover {
    color: $purple;
    background-color: $pink;
  }
}
</style>
