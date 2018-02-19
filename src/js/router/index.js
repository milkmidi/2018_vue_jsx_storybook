import VueRouter from 'vue-router';
import Vue from 'vue';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';

import TemplateTitle from '@/component/TemplateTitle';
import TemplateImage from '@/component/TemplateImage';

Vue.use(VueRouter);

const Main = () => <TemplateTitle title={'原來 vue 可以這樣玩, jsx 與 Storybook'} sub={'milkmidi, 2018/02/28'} />;
const EyeOMyGod = () => <TemplateImage img={require('img/eye.jpg')} sub="假的!" />;
const WhyJSX = () => <TemplateTitle title='為何要寫 jsx ?' sub='因為潮呀(誤)!' />;
const WhyJSX2 = () => <TemplateTitle title='為何要寫 jsx ?' sub='多學一個函式, 少寫一行程式, 就可以加薪(誤), 就可以早點下班' />;
const StorybookIntro = () => <TemplateTitle title='Storybook' sub='https://storybook.js.org/' />;
const WhyStorybook = () => <TemplateTitle title='為何要寫 Storybook ?' sub='因為潮呀(誤)!' />;
const WhyStorybook2 = () => <TemplateTitle title='什麼是測試程式測不出來的?' sub='時程,客戶預算,你的肝指數,IE不能動,視覺元件' />;

const ReactReduxInfo = () =>
  <TemplateTitle
    title='Redux 的定義'
    sub='Component: Read Data from props,Container: Subscribe to Redux state,https://redux.js.org/docs/basics/UsageWithReact.html' />;
const LearnForYourself = () =>
  <TemplateTitle
    title='學習不需要為公司,不需要為長官、同事,不需要為別人,只為你自己。'
    sub='五倍紅寶石 - 高見龍' />;
const Plop = () =>
  <TemplateTitle
    title='樣版產生器 - plop'
    sub='https://www.npmjs.com/package/plop' />;

const GithubUrl = () =>
  <TemplateTitle
    title='Github repository'
    sub='https://github.com/milkmidi/2018_vue_jsx_storybook' />;
const QA = () =>
  <TemplateTitle title='QA' sub='' />;

const EXAMPLE_COUNT = 11;

const req = require.context('../component/', true, /index.js$/);
export const routes = [
  { path: '/', component: Main },
  ...range(EXAMPLE_COUNT).map(i => ({ path: `/example${i}`, component: req(`./Example${i}/index.js`).default })),
  { path: '/exchange-rate', component: require('@/component/ExchangeRate').default },
  { path: '/why-jsx', component: WhyJSX },
  { path: '/why-jsx2', component: WhyJSX2 },
  { path: '/storybook-intro', component: StorybookIntro },
  { path: '/why-storybook', component: WhyStorybook },
  { path: '/why-storybook2', component: WhyStorybook2 },
  { path: '/RoundButtonExample', component: require('@/component/RoundButtonExample').default },
  { path: '/redux', component: ReactReduxInfo },
  { path: '/UserProfileExample', component: require('@/component/UserProfileExample').default },
  { path: '/Plop', component: Plop },
  { path: '/LearnForYourself', component: LearnForYourself },
  { path: '/GithubUrl', component: GithubUrl },
  { path: '/QA', component: QA },
];


export const findMathPathIndex = path => findIndex(routes, p => p.path === path);

routes.splice(findMathPathIndex('/example8') + 1, 0, { path: '/eye', component: EyeOMyGod });


const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
