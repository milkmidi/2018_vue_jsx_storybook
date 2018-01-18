import VueRouter from 'vue-router';
import Vue from 'vue';

const Main = () => import(/* webpackChunkName: "Main" */'@/components/Main');
const About = () => import(/* webpackChunkName: "About" */'@/components/About');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  // { path: '*', component: Main },
];

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
/* router.beforeEach((to, from, next) => {
  next();
}); */

export default router;
