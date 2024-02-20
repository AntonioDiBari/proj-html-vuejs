<script>
import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
      activeSlide: 0,
    };
  },
  methods: {
    /**
     * Funzione che restituisce il path assoluto che VUE non riesce a comprendere da solo
     * @param {*} imgName path relativo
     */
    getUrl(imgName) {
      const imgUrl = new URL(
        "../assets/img/slider-img/" + imgName,
        import.meta.url
      );
      return imgUrl.href;
    },
    indexCatch(index) {
      if (index == 0) {
        return this.activeSlide;
      } else {
        return this.activeSlide + index;
      }
    },
    nextSlide() {
      if (this.activeSlide < store.slides.length - 1) {
        this.activeSlide++;
      } else this.activeSlide = 0;
    },
    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = store.slides.length - 1;
      }
    },
  },
  props: {
    numberSlide: Number,
    hoverClass: String,
    description: Boolean,
  },
};
</script>

<template>
  <div class="slider">
    <div @click="prevSlide()" class="arrow-left">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </div>
    <div @click="nextSlide()" class="arrow-right">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
    <div v-for="(slide, index) in numberSlide" class="slide">
      <img :src="getUrl(store.slides[indexCatch(index)].imagePath)" alt="" />
      <div v-if="hoverClass == 'show-info'" :class="`slide-info`">
        <h2>{{ store.slides[indexCatch(index)].name }}</h2>
        <div>{{ store.slides[indexCatch(index)].description }}</div>
        <h2>{{ store.slides[indexCatch(index)].price }}</h2>
      </div>
      <div v-if="hoverClass == 'show-menu'" :class="`slide-menu`">
        <span>SELECT OPTIONS/ QUICK VIEW</span>
      </div>
      <div v-if="description" class="description">
        <b class="inline-block"> {{ store.slides[indexCatch(index)].name }}</b
        ><br />
        {{ store.slides[indexCatch(index)].price }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.slider {
  display: flex;
  gap: 10px;
  position: relative;
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: 60px;
    width: 30px;
    background-color: #a697c4;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .arrow-right {
    right: 0;
  }
  .slide {
    position: relative;
    .slide-info,
    .slide-menu {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba($color: #000000, $alpha: 0.2);
      color: white;
      text-align: center;
      padding-top: 50%;
      display: none;
    }
    .slide-menu span {
      font-size: 10px;
    }
  }
  .slide:hover .slide-info,
  .slide:hover .slide-menu {
    display: block;
  }
  .description {
    color: $purple;
    text-align: center;
    height: 50px;
  }
}
</style>
