<script>
const PageDisplay = ({ props }) => (
  <div class="page-display">
    {props.currentPage} / {props.totalPages}
  </div>
);
export default PageDisplay;
</script>


<style lang="stylus">
  .page-display
    font-size 20px
</style>