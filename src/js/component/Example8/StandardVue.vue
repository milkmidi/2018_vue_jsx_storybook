<script>
export default {
  data() {
    return {
      input: 'milkmidi',
    };
  },
};
</script>
<template>
  <div>
    <h2>{{input}}</h2>
    <input type="text" 
      class="form-control" 
      v-model="input" />
  </div>
</template>
