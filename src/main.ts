import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import { createPinia } from "pinia";

import {
    // create naive ui
    create,
    // component
    NButton,
    NInput,
  } from 'naive-ui'

  const naive = create({
    components: [NButton,NInput]
  })

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(naive)

app.mount("#app");
