<script>
import Navigation from '@/component/Navigation';

const routes = [
  '/',
  'example1',
  'example2',
];

export default {
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    pushRoute(val) {
      this.index = Math.min(Math.max(0, this.index + val), routes.length - 1);
      this.$router.push(routes[this.index]);
    },
  },
  mounted() {
    window.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === 37 || keyCode === 38) {
        this.pushRoute(-1);
      } else if (keyCode === 39 || keyCode === 40) {
        this.pushRoute(1);
      }
    });
  },
  components: {
    Navigation,
  },
};
</script>

<template lang="pug">
  #app
    Navigation
    main
      transition(name="fade" mode="out-in")
        router-view.view
</template>


<style lang="stylus">
  body
    font-family 'LiHei Pro', "微軟正黑體", "Microsoft JhengHei"	

  html, body, #app, .view
    width 100%
    height 100%

  #app
    display flex
    flex-direction column
    main
      flex 1 

  .standard-vue
  .jsx-component
    position relative
    padding 30px
    border 2px solid black
    &:before
      display block
      top 1px
      left 2px
      font-size 24px
      padding-bottom 20px

  .standard-vue
    &:before
      content 'vue'
  .jsx-component
    background-color #ecf0f1
    &:before
      content 'jsx'
  
  .markdown
    padding-top 20px
  
  .kv-text
    h1
      font-size 80px

  pre
    font-size 120% !important

</style>


