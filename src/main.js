import { createApp } from "vue";

/* import js per bootstrap */
import * as bootstrap from "bootstrap";

//_ import the fontawesome core _//
import { library } from "@fortawesome/fontawesome-svg-core";
//_ import font awesome icon component _//
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//_ import specific icons _//
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faFolderOpen,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

//_ add icons to the library _//
library.add(
  faCartShopping,
  faFolderOpen,
  faChevronLeft,
  faChevronRight,
  faInstagram,
  faTwitter,
  faFacebookF,
  faPinterestP
);

import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
