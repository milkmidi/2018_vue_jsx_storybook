<script>


import ChildComponent from './ChildComponent.vue';


// Vue error：Vue where the template compiler is not available.
/* const ChildComponent = Vue.extend({
  template: `
    <div class="child-component">child-component</div>
  `,
}); */

export default {
  data: () => ({
    name: 'standard-vue',
    list: [0, 1, 2, 3],
  }),
  components: {
    ChildComponent,
  },
};
</script>



<template lang="pug">
  .standard-vue
    h2 {{name}}
    input(type="text" v-model="name")
    ChildComponent
      h1 Child
    p(v-for="v in list", :key="v.toString()") {{v}}
</template>
