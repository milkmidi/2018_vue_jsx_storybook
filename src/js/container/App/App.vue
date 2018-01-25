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


<style lang="stylus" src="css/common.styl">
 

</style>


