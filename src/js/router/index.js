import VueRouter from 'vue-router';
import Vue from 'vue';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';
import TemplateH1 from '../component/TemplateH1';

Vue.use(VueRouter);

const Main = () => <TemplateH1 h1={'原來 vue 可以這樣玩, jsx 與 Storybook'} h4={'milkmidi, 2018/02/28'} />;
const WhyJSX = () => <TemplateH1 h1={'為何要寫 jsx ?'} h4={'因為潮呀(誤)!'} />;
const WhyJSX2 = () => <TemplateH1 h1={'為何要寫 jsx ?'} h4={'多學一個function, 少寫一行程式, 就可以早點下班'} />;
const StorybookIntro = () => <TemplateH1 h1={'Storybook'} h4={'https://storybook.js.org/'} />;
const WhyStorybook = () => <TemplateH1 h1={'為何要寫 Storybook ?'} h4={'因為潮呀(誤)!'} />;
const WhyStorybook2 = () => <TemplateH1 h1={'什麼是測試程式測不出來的?'} h4={'時程,客戶預算,你的肝指數,IE不能動,視覺元件'} />;


const req = require.context('../component/', true, /index.js$/);
export const routes = [
  { path: '/', component: Main },
  ...range(10).map(i => ({ path: `/example${i}`, component: req(`./Example${i}/index.js`).default })),
  { path: '/why-jsx', component: WhyJSX },
  { path: '/why-jsx2', component: WhyJSX2 },
  { path: '/storybook-intro', component: StorybookIntro },
  { path: '/why-storybook', component: WhyStorybook },
  { path: '/why-storybook2', component: WhyStorybook2 },
  { path: '/demo-button', component: require('@/container/DemoButtonContainer').default },
];


export const findMathPathIndex = path => findIndex(routes, p => p.path === path);

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
