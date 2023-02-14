import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { languages } from "./i18n";
import { defaultLocale } from "./i18n";
import { createI18n, useI18n } from "vue-i18n";
import VueKinesis from "vue-kinesis";
import VueFullscreen from "vue-fullscreen";

import "./assets/main.css";
import "./assets/sounds/space.mp3";
export const audio = new Audio("./assets/sounds/space.mp3");

const localStorageLang = localStorage.getItem("lang");

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: "en",
  messages,
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(VueKinesis);
app.use(VueFullscreen);

app.mount("#app");
