<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="container">
    <div class="step mb-5">
      <img src="../assets/img/bakery-process-1.jpg" alt="" class="img-step" />
      <div class="step-info">
        <div class="info-header">
          <span class="title-info">Tell us what you have in mind</span>
          <span class="number-info">01</span>
        </div>
        <div class="info-footer align-self-end">
          <div>
            <span class="subtitle">MANUAL INGREDIENTS SECTION</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem qui vero corporis harum quae, debitis animi, aut
              consequuntur, minus officiis ipsa itaque. Odit nihil distinctio
              dolor optio quam placeat natus?3
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-6 col-left">
        <img src="../assets/img/bakery-process-2.jpg" alt="" class="img-step" />
        <div class="step-info step-info-col">
          <div class="info-header">
            <span class="title-info">We Start Baking</span>
            <span class="number-info">02</span>
          </div>
          <div class="info-footer align-self-start">
            <div>
              <span class="subtitle">SWEET & DELICIUS</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem qui vero corporis harum quae, debitis animi, aut
                consequuntur, minus officiis ipsa itaque. Odit nihil distinctio
                dolor optio quam placeat natus?3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-right">
        <h4 class="subtitle">DON'T JUST TAKE OUR WORD FOR IT</h4>
        <h2 class="title mt-3">
          "Finnaly found an alternative to the mass produced products.
          Somethings that incorporates real organic ingrediants, nutrient dense
          wellness while promoting sustainability and activity.""
        </h2>
        <h4 class="subtitle mt-3">Rachel Cooper, Founder</h4>
      </div>
    </div>
    <div class="step mb-5">
      <img src="../assets/img/bakery-process-3.jpg" alt="" class="img-step" />
      <div class="step-info">
        <div class="info-header">
          <span class="title-info">Delivered to your home</span>
          <span class="number-info">03</span>
        </div>
        <div class="info-footer align-self-start">
          <div>
            <span class="subtitle">BAKED TO ORDER & GIFT WRAPPED</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem qui vero corporis harum quae, debitis animi, aut
              consequuntur, minus officiis ipsa itaque. Odit nihil distinctio
              dolor optio quam placeat natus?3
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
  margin-top: 10rem;
}
.step,
.col-left {
  position: relative;
}
.step {
  height: 600px;
  width: 100%;
}
.img-step {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.step-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: White;
}
.step-info-col {
  left: 12px;
  right: 12px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  .title-info {
    font-size: 2.5rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    width: 600px;
  }
  .number-info {
    font-size: 3.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
}
.info-footer {
  display: flex;
  width: 350px;
}
.wrapper {
  margin-top: 100px;
}

.col-right {
  background-color: $pink2;
  padding: 100px 80px;
}
</style>
