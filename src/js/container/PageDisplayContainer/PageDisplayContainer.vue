<script>
import PageDisplay from '@/component/PageDisplay';

export default {
  render() {
    const { index, totalPages } = this.$store.getters;
    return (
      <div class="page-display-container">
        <PageDisplay currentPage={index + 1} totalPages={totalPages}/>
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