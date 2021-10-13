import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router';
import "./styles/app.less";
import ElementUI from 'element-ui';


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
