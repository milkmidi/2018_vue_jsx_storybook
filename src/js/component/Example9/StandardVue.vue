<script>
export default {
  data() {
    return {
      boolean: true,
      number: 1,
      array: [0, 1, 2, '3', '4', '5'],
    };
  },
};
</script>
<template>
  <section>
    <p>{{boolean}}</p>
    <p>{{number}}</p>
    <p>{{array}}</p>
  </section>
</template>
