import VueRouter from 'vue-router';
import Vue from 'vue';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';

Vue.use(VueRouter);


const req = require.context('../component/', true, /index.js$/);
export const routes = [
  { path: '/', component: require('@/component/Main').default },
  ...range(9).map(i => ({ path: `/example${i}`, component: req(`./Example${i}/index.js`).default })),
];


export const findMathPathIndex = path => findIndex(routes, p => p.path === path);

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
