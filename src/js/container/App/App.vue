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
        <a class="logo" href="http://milkmidi.blogspot.tw" target="_blank"></a>
        <PageDisplayContainer />
        <main>
          <router-view class="view" />
        </main>
      </div>
    );
  },
};
</script>

<style lang="stylus">
  .logo
    display block
    position absolute
    width 80px
    height @width
    top 0
    left 0
    background-image url('~img/logo.png')
</style>

<style lang="stylus" src="css/common.styl" />