import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import qs from 'qs';
import bus from './utils/bus';
import './utils/rem';
import storage from './utils/storage';
import { JudgeAgent } from './utils/tool';
import Directives from './directive';

import '@/styles/normalize.scss';
const { pageEnv, versions } = new JudgeAgent();

Vue.config.productionTip = false;

try {
  Object.assign(Vue.prototype, {
    $env: pageEnv,
    $versions: versions,
    $bus: bus,
    $storage: storage,
    $qs: qs
    // $clipboard: clipboard,
  });

  Vue.use(Directives);
  Vue.mixin({});

  window.$Vue = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount('#app');
} catch (error) {
  console.log('gloabal===>', error);
}

window.addEventListener('error', function(error) {
  if (error.message.toLocaleLowerCase().indexOf('script error') !== 0) {
    console.log(`${error.message} at ${error.filename}:${error.lineno}:${error.colno}`);
  }
});
