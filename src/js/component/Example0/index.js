import Template from '@/component/Template';
import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';
// standard={require('!raw-loader!docs-loader?lang=html!./StandardVue.vue')}

const Example1 = () => (
  <Template
    standard={require('!raw-loader!docs-loader!./StandardVue.vue')}
    jsx={require('!raw-loader!docs-loader!./JSXComponent.vue')}>
    <h1 slot="title">00 Basic</h1>
    <StandardVue slot="standard" />
    <JSXComponent slot="jsx" />
  </Template>
);

export default Example1;
