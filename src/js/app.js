import Vue from 'vue';

import router from './router';
import App from './container/App';
import store from './store';

require('img/snapshot.png');


export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
