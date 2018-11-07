<script>
const SwitchTab = {

  mounted() {
  },
  render() {
    return (
      <div class="switch-tab">
        {
          this.$slots.default.map(child => (
            <div class="border mb-2">
              {child}
            </div>
          ))
        }
      </div>

    );
  },
};

export default {
  render() {
    return (
      <section>
        <p>JSX 就可以針對 slots 元素再加工</p>
        <SwitchTab>
          <h2>content1</h2>
          <h2>content2</h2>
          <h2>content3</h2>
        </SwitchTab>
      </section>
    );
  },
};
</script>

