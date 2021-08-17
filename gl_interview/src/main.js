import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
// import 'fullpage.js/vendors/scrolloverflow.js';
// import './fullpage.scrollHorizontally.min';
import "./styles/app.less";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
