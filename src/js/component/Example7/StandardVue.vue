<script>
import random from 'lodash/random';

export default {
  methods: {
    random(lower = 0, upper = 1) {
      return random(lower, upper);
    },
  },

};
</script>
<template>
  <div>
    <h2>{{random(0,999)}}</h2>
  </div>
</template>
