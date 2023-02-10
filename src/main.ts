import { createPinia } from "pinia";
import { createApp } from "vue";

// Styles
import "@/assets/scss/app.scss";
import "uno.css";

// Floating UI
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(FloatingVue);
app.mount("#app");
