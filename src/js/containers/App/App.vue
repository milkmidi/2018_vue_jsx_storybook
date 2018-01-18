<script>
import Navigation from '@/components/Navigation';

export default {
  computed: {
  },
  methods: {
  },
  mounted() {
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

  html, body, #app
    width 100%
    height 100%

</style>


