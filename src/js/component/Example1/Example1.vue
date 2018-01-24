

<script>

import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';

export default {
  components: {
    StandardVue,
    JSXComponent,
  },
};
</script>

<template lang="pug">
.example1.container-fluid
  .kv-text.text-center
    h1 01 Basic
  .row
    .col-6
      StandardVue
    .col-6
      JSXComponent
  //- .code-wrap(v-html="docs")
</template>

