<script>


const Link = ({ props }) => {
  if (/http/.test(props.text)) {
    return <a class="sub-label" href={props.text} target="_blank">{props.text}</a>;
  }
  return <div class="sub-label">{props.text}</div>;
};

const TemplateH1 = ({ props }) => {
  const { h1 = '', h4 = '' } = props;
  return (
    <section>
      <div class="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
        { h1.split(',').map(s => <div class="main-label" key={s}>{s}</div>) }
        <br />
        { h4.split(',').map(s => <Link key={s} text={s} />) }
      </div>
    </section>
  );
};
export default TemplateH1;
</script>

<style lang="stylus" scoped>
  .main-label
    font-size 4.2rem
  .sub-label
    font-size 2rem
  a
    display block
</style>
