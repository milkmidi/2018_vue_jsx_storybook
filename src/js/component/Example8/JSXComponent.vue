<script>

export default {
  data() {
    return {
      input: 'milkmidi',
    };
  },
  render() {
    return (
      <div>
        <h2>{this.input}</h2>
        <input type="text"
          class="form-control"
          v-model={this.input} />
      </div>
    );
  },
};
</script>

