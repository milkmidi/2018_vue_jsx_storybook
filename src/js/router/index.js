import VueRouter from 'vue-router';
import Vue from 'vue';

import Example1 from '@/component/Example1';
import Main from '@/component/Main';
import About from '@/component/About';

const JSXContainer = () => import(/* webpackChunkName: "JSXContainer" */'@/container/JSXContainer');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/example1', component: Example1 },
  { path: '/jsx', component: JSXContainer },
];

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
