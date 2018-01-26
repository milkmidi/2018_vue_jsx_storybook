<script>

const ChildComponent = {
  render() {
    return (
      <div class="child-jsx">
        <h2>I'm Child Component</h2>
      </div>
    );
  },
};

export default {
  data() {
    return {
    };
  },
  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  },
};
</script>

