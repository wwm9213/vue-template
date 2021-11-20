import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/global.scss';

import Directives from './directive';

Vue.config.productionTip = false;

Vue.use(Directives);

window.$Vue = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
