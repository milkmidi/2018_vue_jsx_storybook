import Template from '@/component/Template';
import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';

const Example1 = () => (
  <Template
    standard={require('!raw-loader!docs-loader!./StandardVue.vue')}
    jsx={require('!raw-loader!docs-loader!./JSXComponent.vue')}>
    <div class="title" slot="title">
      <h1>00 Basic</h1>
    </div>
    <StandardVue slot="standard" />
    <JSXComponent slot="jsx" />
  </Template>
);

export default Example1;
