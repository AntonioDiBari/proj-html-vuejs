<script>
import AppLogo from "./AppLogo.vue";
import AppBtn from "./AppBtn.vue";

import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
      userMail: "",
    };
  },
  methods: {
    registration() {
      if (
        this.userMail.length > 20 &&
        this.userMail.includes("@") &&
        (this.userMail.includes(".it") || this.userMail.includes(".com"))
      ) {
        alert(
          `Grazie per esserti iscritto alla notra Newsletter, riveverai promo e tanto altro sulla tua mail ${this.userMail}`
        );
        store.newsletterUsers.push(this.userMail);
      } else {
        alert("Inserire una mail valida!");
      }
    },
    backTop() {
      document.documentElement.scrollTop = 0;
    },
  },
  components: { AppLogo, AppBtn },
  props: {
    navLinks: Array,
    socials: Array,
  },
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
              v-for="link in navLinks.filter((link, index) => {
                return index != 0 && index != navLinks.length - 2;
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
                v-model="userMail"
                type="email"
                placeholder="Enter email address*"
                class="form-control"
              />
              <AppBtn
                :text="`Subscribe`"
                :textClass="`white`"
                @click="registration()"
              />
            </div>
          </div>
          <div class="social-section">
            <ul>
              <li v-for="social in socials" class="social-logo">
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
    <div class="back-top" @click="backTop()">
      <font-awesome-icon icon="fa-solid fa-chevron-up" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

footer {
  position: relative;
  .back-top {
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 40px;
    aspect-ratio: 1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: grey;
  }
  .back-top:hover {
    background-color: #474747;
  }
}
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
    input::placeholder {
      font-size: 0.8rem;
      color: grey;
    }
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
