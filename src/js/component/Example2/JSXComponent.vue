<script>
export default {
  methods: {
    clickHandler() {
      console.log('hi');
    },
  },
  render() {
    return (
      <section>
        <button
          class="btn btn-primary"
          onClick={this.clickHandler}>Click</button>
      </section>
    );
  },
};
</script>
