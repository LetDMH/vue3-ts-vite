/*
 * @Author: dingminghui
 * @Date: 2021-10-30 15:46:10
 * @LastEditTime: 2021-11-04 11:46:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite/src/main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const app = createApp(App);

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    app,
    dsn: "https://0e33b40f72704705ae3057bf8d9dc055@o1059760.ingest.sentry.io/6048636",
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "my-site-url.com", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

app.use(router);
app.use(store);
app.use(Antd);

app.mount('#app')
