import Vue from "vue";
import * as Sentry from "@sentry/vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Sentry.init({
  Vue,
  dsn: "https://218f2b5cf5aba2593ece4de99c6667d4@o4506314774740992.ingest.sentry.io/4506386975490049",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
