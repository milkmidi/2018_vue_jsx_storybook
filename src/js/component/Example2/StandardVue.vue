
<script>
export default {
  data() {
    return {
      name: 'milkmidi',
      markdown: require('./StandardVue.md'),
    };
  },
};
</script>

<template>
  <div class="standard-vue">
    <h2>{{name}}</h2>
    <div class="markdown" v-html="markdown" />
  </div>
</template>
