<script>

const DemoButton = ({ props, children, listeners }) => {
  const { color = '#42b983', rounded = false } = props;
  const data = {
    class: [rounded ? 'rounded' : ''],
    style: { color, borderColor: color },
  };
  return (
    <button
      class="storybook-demo-btn"
      {...data}
      onClick={listeners.click}>
      {children}
    </button>
  );
};

export default DemoButton;
</script>

<style lang="stylus">
.storybook-demo-btn
  cursor pointer
  border 3px solid
  padding 10px 20px
  background-color white
  outline none
  &:hover
    color white
    background-color #dddddd
  &.rounded
    border-radius 20px
</style>