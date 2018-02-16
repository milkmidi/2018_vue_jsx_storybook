<script>


const TemplateImage = ({ props }) => {
  const { img } = props;
  return (
    <section>
      <div class="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <img src={img} />
      </div>
    </section>
  );
};
export default TemplateImage;
</script>

<style lang="stylus" scoped>
  .main-label
    font-size 4.2rem
  .sub-label
    font-size 2rem
  a
    display block
</style>
