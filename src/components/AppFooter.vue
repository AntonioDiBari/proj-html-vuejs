<script>
import AppLogo from "./AppLogo.vue";
import AppBtn from "./AppBtn.vue";

import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  components: { AppLogo, AppBtn },
};
</script>

<template>
  <footer class="container mb-5">
    <div class="row">
      <div class="col-6">
        <div class="footer-left">
          <AppLogo />

          <ul class="mb-4 fw-medium">
            <li
              v-for="link in store.navLinks.filter((link, index) => {
                return index != 0 && index != store.navLinks.length - 2;
              })"
            >
              {{ link.toUpperCase() }}
            </li>
            <li>
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="me-2"
              />
              <div class="cart-number"><div class="number">0</div></div>
            </li>
          </ul>
          <div class="subtitle">
            © Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights
            Reserved | Powered by WordPress
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="footer-right">
          <div class="newsletter-section">
            <h4 class="title mb-4">Subscrive to our Newsletter</h4>
            <div class="form-mail d-flex">
              <input
                type="email"
                placeholder="Enter email address*"
                class="form-control"
              />
              <AppBtn :text="`Subscrive`" :textClass="`white`" />
            </div>
          </div>
          <div class="social-section">
            <ul>
              <li v-for="social in store.socials" class="social-logo">
                <font-awesome-icon
                  :icon="`fa-brands fa-${social}`"
                  class="clicable"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ul {
    color: $purple;
    font-size: 9px;
    letter-spacing: 0.5px;
    margin-bottom: 25px;
  }
  li {
    margin-right: 30px;
    padding: 25px 0 5px 0;
    cursor: pointer;
    .cart-number {
      background-color: $pink;
      color: $purple;
      display: inline-block;
      border-radius: 50%;
      .number {
        font-size: 10px;
        padding: 5px;
        width: 25px;
        aspect-ratio: 1;
        text-align: center;
      }
    }
  }
  li:hover {
    border-bottom: 2px solid $purple;
  }
  li:last-child:hover {
    border-bottom: 0;
  }
}

.footer-right {
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6rem;
  .newsletter-section {
    align-self: flex-end;
  }
  .newsletter-section .title {
    font-size: 1.5rem;
  }
  .newsletter-section .form-mail {
    width: 400px;
    gap: 1rem;
  }
  .social-section .social-logo {
    display: inline-block;
    width: 50px;
    color: $purple;
    .clicable {
      cursor: pointer;
    }
  }
}
</style>
