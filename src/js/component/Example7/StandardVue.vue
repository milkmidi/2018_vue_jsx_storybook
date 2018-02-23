<script>
import random from 'lodash/random';
import range from 'lodash/range';

export default {
  methods: {
    random(lower = 0, upper = 1) {
      return random(lower, upper);
    },
    range(...arg) {
      return range(arg);
    },
  },
};
</script>
<template>
  <section>
    <h5>{{random(0,999)}}</h5>
    <h5>{{range(5)}}</h5>
  </section>
</template>
