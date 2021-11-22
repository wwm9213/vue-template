import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bus from './utils/bus'

import '@/styles/normalize.scss';

import Directives from './directive';

Vue.config.productionTip = false;

Vue.use(Directives);

Vue.prototype.$bus = bus

window.$Vue = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
