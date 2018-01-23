<script>
export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  components: {
  },
};
</script>

<template lang="pug">
nav
  router-link(to="/") Main
  router-link(to="/about") About
</template>

<style lang="stylus" scoped>
nav
  padding 20px 0
  text-align center
  background-color #f3f3f3
  position absolute
  top 0
  left 0
  display none
  a
    font-size 40px
    padding 20px
</style>