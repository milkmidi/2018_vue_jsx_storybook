<script>
import Navigation from '@/component/Navigation';

export default {
  computed: {
  },
  methods: {
  },
  mounted() {
    window.addEventListener('keydown', ({ keyCode }) => {
      console.log(keyCode);
      console.log(this.$router);
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

  html, body, #app, main, .view
    width 100%
    height 100%

  
  pre
    font-size 100% !important

</style>


