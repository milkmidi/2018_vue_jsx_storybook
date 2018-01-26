<script>
export default {
  data() {
    return {
      list: [0, 1, 2, 3],
    };
  },
};
</script>
<template>
  <div>
    <div class="box" 
      v-for="v in list" 
      :key="v.toString()">{{v}}</div>
  </div>
</template>
