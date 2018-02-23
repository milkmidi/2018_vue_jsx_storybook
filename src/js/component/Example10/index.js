import Template from '@/component/Template';
import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';

export default {
  functional: true,
  render() {
    return (
      <Template
        standard={require('!raw-loader!docs-loader!./StandardVue.vue')}
        jsx={require('!raw-loader!docs-loader!./JSXComponent.vue')}>
        <div slot="title">
          <h1>10 Conditional Rendering</h1>
          <p>vue template 不充許只放 slot, 一定要有 root tag</p>
        </div>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};

