import Template from '@/component/Template';
import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';

export default {
  data: () => ({
    standard: require('!raw-loader!docs-loader!./StandardVue.vue'),
    jsx: require('!raw-loader!docs-loader!./JSXComponent.vue'),
  }),
  render() {
    return (
      <Template
        standard={this.standard}
        jsx={this.jsx}>
        <div slot="title">
          <h1>06 Props Spread</h1>
          <a class="btn btn-link"
            target="_blank"
            href="https://github.com/vuejs/babel-plugin-transform-vue-jsx">babel-vue-jsx</a>
          <a class="btn btn-link"
            target="_blank"
            href="https://vuejs.org/v2/guide/render-function.html#Functional-Components">vue functional components</a>
        </div>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};

