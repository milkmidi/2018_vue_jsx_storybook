<script>

const ChildComponent = {
  props: ['name'],
  render() {
    return (
      <div class="child-jsx">
        <h2>Child Component {this.name}</h2>
      </div>
    );
  },
};

export default {
  components: {
    // 可以不用寫
  },
  render() {
    return (
      <section>
        <ChildComponent name="milkmidi" />
      </section>
    );
  },
};
</script>

