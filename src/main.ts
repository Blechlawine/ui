import App from "./App.vue";
import "@unocss/reset/tailwind.css";
import "uno.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router/auto";

const router = createRouter({
    history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
