
<script>
import JSXComponent from '@/component/ExampleComponent/JSXComponent.vue';
import StandardVue from '@/component/ExampleComponent/StandardVue.vue';

export default {
  components: {
    JSXComponent,
    StandardVue,
  },
};
</script>

<template lang="pug">
  .jsx-container
    JSXComponent
    StandardVue
</template>
