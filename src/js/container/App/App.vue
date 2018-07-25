<script>
import Vuex from 'vuex';
import { findMathPathIndex } from '@/router';
import PageDisplayContainer from '@/container/PageDisplayContainer';
import ArrowButton from '@/component/ArrowButton';

export default {
  computed: {
    ...Vuex.mapGetters(['index', 'isFirstPage', 'isLastPage']),
  },
  methods: {
    ...Vuex.mapMutations(['updateIndex']),
    prevClick() {
      this.updateIndex(this.index - 1);
    },
    nextClick() {
      this.updateIndex(this.index + 1);
    },
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
        <div class="arrow-buttons">
          <ArrowButton onClick={this.prevClick} hidden={this.isFirstPage} />
          <ArrowButton onClick={this.nextClick} hidden={this.isLastPage} right/>
        </div>
        <main class="main">
          <router-view class="view" />
        </main>
      </div>
    );
  },
};
</script>

<style lang="stylus">
#app
  .logo
    display block
    position absolute
    width 80px
    height @width
    top 0
    left 0
    background-image url('~img/logo.png')
  .arrow-buttons
    position fixed
    right 10px
    bottom 10px
    z-index 99
    .arrow-button
      font-size 100%
      display inline-block
</style>

<style lang="stylus" src="css/common.styl" />