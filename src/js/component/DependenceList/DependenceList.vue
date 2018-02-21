<script>
import TemplateTitle from '@/component/TemplateTitle';

const Item = ({ props }) => (
  <div class="row">
    <div class="col-5 text-center">
      <a target="_blank" href={props.url}>{props.name}</a>
    </div>
    <div class="col-7 text-center">
      <span>{props.description}</span>
    </div>
  </div>
);

export default {
  name: 'DependenceList',
  components: {
    Item,
    TemplateTitle,
  },
  render() {
    return (
      <TemplateTitle title="Dependencies">
        <div class="container">
          <Item
            name="babel-plugin-transform-vue-jsx"
            url="https://github.com/vuejs/babel-plugin-transform-vue-jsx"
            description="jsx to render function" />
          <Item
            name="babel-plugin-jsx-v-model"
            url="https://github.com/nickmessing/babel-plugin-jsx-v-model"
            description="jsx v-model" />
          <Item
            name="vue-styled-components"
            url="https://github.com/styled-components/vue-styled-components"
            description="這個有點難用文字解說" />
          <Item
            name="storybook"
            url="https://storybook.js.org/"
            description="storybook" />
          <Item
            name="Storybook Viewport Addon"
            url="https://www.npmjs.com/package/@storybook/addon-viewport"
            description="storybook Viewport" />
          <Item
            name="storybook-readme"
            url="https://github.com/tuchk4/storybook-readme"
            description="storybook readme" />
        </div>
      </TemplateTitle>
    );
  },
};

</script>

<style lang="stylus">
  .row
    font-size 16px
    margin-bottom 10px
</style>
