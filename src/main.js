import "element-plus/dist/index.css";

import App from "./App.vue";
import ElementPlus from "element-plus";
import { createApp } from "vue";
import router from "./router";

createApp(App).use(router).use(ElementPlus).mount("#app");
