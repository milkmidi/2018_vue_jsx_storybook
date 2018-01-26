<!--
<template lang="pug" functional>
  .child-component
    h2(@click="listeners.pipi") {{props.name}}
</template>
-->
<script>
import ChildComponent from './ChildComponent.vue';

export default {
  methods: {
    click() {
      console.log('click');
    },
  },
  components: {
    ChildComponent,
  },
};
</script>
<template>
  <div>
    <ChildComponent name="milkmidi" @pipi="click"/>
  </div>
</template>
