<script>

const Link = ({ props }) =>
  <a class="sub-title"
    href={props.text}
    target="_blank"
    disable={!/^http/.test(props.text)}>
    {props.text}
  </a>;

export default {
  functional: true,
  props: {
    title: String,
    sub: String,
  },
  render(h, { props, slots }) {
    const { title = '', sub = '' } = props;
    return (
    <section>
      <div class="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
        { title.split(',').map(s => <div class="main-title" key={s}>{s.trim()}</div>) }
        <br />
        { sub.split(',').map(s => <Link key={s} text={s.trim()} />) }
        { slots().default }
      </div>
    </section>
    );
  },
};
</script>

<style lang="stylus" scoped>
  .main-title
    font-size 4.8rem
    text-align center
  .sub-title
    font-size 1.6rem
  a
    display block
    &[disable]
      font-size 2rem
      pointer-events none !important
      cursor default
</style>
