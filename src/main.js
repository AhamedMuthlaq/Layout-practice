import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify";
import Router from "vue-router";
import routes from "./router/index";
import pinia from "@/plugins/pinia";

Vue.use(pinia);

Vue.use(Router);
const router = new Router({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  pinia,
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
