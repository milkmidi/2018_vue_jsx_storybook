import Template from '@/component/Template';
import RoundButtonExample from './RoundButtonExample.vue';

export default {
  functional: true,
  render() {
    return (
      <Template
        attrVue=""
        standard={require('!raw-loader!docs-loader!./RoundButtonExample.vue')} >
        <div slot="title">
          <h1>RoundButton</h1>
          <a class="btn btn-link"
            href="https://milkmidi.github.io/2018_vue_jsx_storybook/storybook/"
            target="_blank">https://milkmidi.github.io/2018_vue_jsx_storybook/storybook/</a>
        </div>
        <RoundButtonExample slot="standard" />
      </Template>
    );
  },
};

