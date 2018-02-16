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
  <section>
    <button
      class="btn btn-primary" 
      @click="clickHandler">Click</button>
  </section>
</template>
