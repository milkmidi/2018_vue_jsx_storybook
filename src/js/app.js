import Vue from 'vue';
import 'es6-promise/auto';

import router from './router';
import App from './container/App';
import store from './store';


// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
