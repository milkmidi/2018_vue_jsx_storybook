<script>
export default {
  methods: {
    clickHandler() {
      console.log('hi');
    },
  },
};
</script>
<template>
  <div>
    <button
      class="btn btn-primary" 
      @click="clickHandler">Click</button>
  </div>
</template>
