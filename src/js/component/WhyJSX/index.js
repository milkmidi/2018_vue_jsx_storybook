import Template from '@/component/Template';
import WhyJSX from './WhyJSX.vue';

export default {
  functional: true,
  render() {
    return (
      <Template
        attrVue="三種寫法，一次滿足"
        standard={require('!raw-loader!docs-loader!./WhyJSX.vue')} >
        <div slot="title">
          <h1>Why JSX</h1>
        </div>
        <WhyJSX slot="standard" />
      </Template>
    );
  },
};

