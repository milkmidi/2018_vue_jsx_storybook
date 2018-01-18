
<script>

export default {
  data() {
    return {
      text: '',
      show: true,
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
.main-root
  h2 Main hi
  .flex I'm flex.1
  input(ref="input" type="number" v-show="show" v-model="text")
  p {{text}}
  
</template>


<style scoped lang="stylus">
.main-root
  background-color red
  h1
    font-size: 100px
</style>