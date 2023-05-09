import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import commonRouter from './router/CommonRouter';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router:commonRouter,
  render: h => h(App),
}).$mount('#app')
