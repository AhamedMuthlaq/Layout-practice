import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify";
import router from "./router";
import pinia from "@/plugins/pinia";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

Vue.use(pinia);
Vue.component("DefaultLayout", DefaultLayout);
Vue.config.productionTip = false;

new Vue({
  pinia,
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
