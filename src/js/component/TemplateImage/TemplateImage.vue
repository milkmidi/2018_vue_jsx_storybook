<script>

export default {
  functional: true,
  props: {
    img: String,
    sub: [String, Array],
  },
  render(h, { props }) {
    const { img, sub = '' } = props;
    return (
    <section>
      <div class="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <img src={img} />
        {
          sub.split(',').map(t => <p class="h4" key={t}>{t}</p>)
        }
      </div>
    </section>
    );
  },
};
</script>

<style lang="stylus" scoped>
  .main-label
    font-size 4.2rem
  .sub-label
    font-size 2rem
  a
    display block
</style>
