<script>

import Vuex from 'vuex';
import { findMathPathIndex } from '@/router';
import PageDisplayContainer from '@/container/PageDisplayContainer';


export default {
  methods: {
    ...Vuex.mapMutations(['updateIndex']),
  },
  mounted() {
    const index = findMathPathIndex(this.$route.path);
    this.updateIndex(index);
  },
  render() {
    return (
      <div id="app">
        <PageDisplayContainer />
        <main>
          <router-view class="view" />
        </main>
      </div>
    );
  },
};
</script>



<style lang="stylus" src="css/common.styl" />