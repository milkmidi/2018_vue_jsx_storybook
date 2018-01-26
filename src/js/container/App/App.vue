<script>
// import Navigation from '@/component/Navigation';

import Vuex from 'vuex';
import { findMathPathIndex } from '../../router';

export default {
  data() {
    return {
    };
  },
  methods: {
    ...Vuex.mapMutations(['updateIndex']),
  },
  mounted() {
    const index = findMathPathIndex(this.$route.path);
    this.updateIndex(index);
  },
  components: {
    // Navigation,
  },
};
</script>

<template lang="pug">
  #app
    //- Navigation
    main
      transition(name="fade" mode="out-in")
        router-view.view
</template>


<style lang="stylus" src="css/common.styl">
</style>


