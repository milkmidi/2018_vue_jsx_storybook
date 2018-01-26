<!-- ChildComponent.vue
<script>
export default {
  props: ['data'],
};
</script>
<template lang="pug">
  .child-component
    h3 {{data.name}} - {{data.age}}
</template>
-->
<script>
import ChildComponent from './ChildComponent.vue';

export default {
  data() {
    return {
      list: [
        { name: 'milkmidi', age: 18 },
        { name: '奶綠茶', age: 17 },
      ],
    };
  },
  components: {
    ChildComponent,
  },
};
</script>
<template>
  <div>
    <ChildComponent 
      v-for="o in list"
      :key="o.name"
      :data="o"/>
  </div>
</template>
