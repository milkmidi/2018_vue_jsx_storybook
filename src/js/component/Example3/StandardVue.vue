<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>
<template>
  <section>
    <button class="btn btn-primary" 
      @click="show=!show">
      Toggle</button>
    <div class="box lg" v-if="show">Yes</div>
    <div class="box lg" v-if="!show">No</div>
  </section>
</template>
