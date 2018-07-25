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
          <h1>11 slot 加工</h1>
        </div>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};

