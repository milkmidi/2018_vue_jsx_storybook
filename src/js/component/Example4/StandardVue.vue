<script>
import Vue from 'vue';

const ChildComponent = Vue.extend({
  template: `
    <div>
      123
    </div>
  `,
});

export default {
  data() {
    return {
    };
  },
  components: {
    ChildComponent,
  },
};
</script>
<template>
  <div>
    <!-- <ChildComponent /> -->
    <!-- 不支援一個 .vue 檔包多組 template -->
  </div>
</template>
