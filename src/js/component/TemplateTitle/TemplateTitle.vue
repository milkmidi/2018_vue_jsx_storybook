<script>

const Link = ({ props }) => (
  /^http/.test(props.text)
    ? <a class="sub-title" href={props.text} target="_blank">{props.text}</a>
    : <span class="sub-title">{props.text}</span>
);

const TemplateTitle = ({ props, slots }) => {
  const { title, sub, img } = props;
  return (
    <section class="template">
      <div class="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
        {
          img
          ? <img src={img} class="img" />
          : null
        }
        {
          title
           ? title.split(',').map(s => <div class="main-title" key={s}>{s.trim()}</div>)
           : null
        }
        {
          sub
            ? sub.split(',').map(s => <Link key={s} text={s.trim()} />)
            : null
        }
        { slots().default }
      </div>
    </section>
  );
};
export default TemplateTitle;
</script>

<style lang="stylus">
  .template
    .main-title
      font-size 4.8rem
    .sub-title
      font-size 1.7rem
      line-height 2.4rem
      &:nth-of-type(1)
        padding-top 5px
    .img
      border-radius 15px
      margin-bottom 10px
</style>
