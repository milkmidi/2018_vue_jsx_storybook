import Vue from 'vue';
import 'es6-promise/auto';

import router from './router';
import App from './container/App';
import store from './store';

import markdownPlugin from './util/markdown-plugin';

markdownPlugin.install(Vue);


// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
