<!-- ChildComponent.vue
<template lang="pug" functional>
  .child-component
    h3 {{props.data.name}} - {{props.data.age}}
</template>
-->

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  data: () => ({
    list: [
      { name: 'milkmidi', age: 18 },
      { name: '奶綠茶', age: 17 },
    ],
  }),
  components: {
    ChildComponent,
  },
};
</script>
<template>
  <section>
    <ChildComponent 
      v-for="o in list"
      :key="o.name"
      :data="o"/>
  </section>
</template>
