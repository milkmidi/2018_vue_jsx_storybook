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
          <h1>08 v-model</h1>
          <div>預設不支援 v-model, 好在vue作者有寫babel plugin</div>
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

