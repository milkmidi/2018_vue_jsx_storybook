<script>
import PageDisplay from '@/component/PageDisplay';

export default {
  render() {
    const { getters, commit } = this.$store;
    const { index, totalPages } = getters;
    return (
      <div class="page-display-container">
        <PageDisplay
          currentPage={index}
          totalPages={totalPages}
          onInput={v => commit('updateIndex', v)}
          />
      </div>
    );
  },
};
</script>

<style lang="stylus">
  .page-display-container
    position fixed
    top 10px
    right @top
</style>