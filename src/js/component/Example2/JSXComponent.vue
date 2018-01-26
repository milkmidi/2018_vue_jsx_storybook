<script>
export default {
  methods: {
    clickHandler() {
      console.log('hi');
    },
  },
  render() {
    return (
      <div>
        <button
          class="btn btn-primary"
          onClick={this.clickHandler}>Click</button>
      </div>
    );
  },
};
</script>
