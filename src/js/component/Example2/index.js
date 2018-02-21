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
        <h1 slot="title">02 Listeners</h1>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};
