<script>
export default {
  data: () => ({
    list: [0, 1, 2, 3],
  }),
};
</script>
<template>
  <section>
    <div class="box" 
      v-for="v in list" 
      :key="v.toString()">{{v}}</div>
  </section>
</template>
