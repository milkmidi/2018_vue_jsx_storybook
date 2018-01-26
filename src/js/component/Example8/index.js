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
          <h1>08 v-model</h1>
          <a
            class="btn btn-link"
            href="https://github.com/nickmessing/babel-plugin-jsx-v-model"
            target="_blank">babel-plugin-jsx-v-model</a>
        </div>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};

