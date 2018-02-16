<script>

export default {
  data() {
    return {
      input: 'milkmidi',
      checkedNames: [], // 這有雷，快來踩
    };
  },
  render() {
    return (
      <section>
        <h2>{this.input}</h2>
        <p>{this.checkedNames}</p>
        <input type="text"
          class="form-control"
          v-model={this.input} />
        <div class="checkbox-wrap">
          <label>
            <input type="checkbox"
              value="vue" v-model={this.checkedNames} />
            vue
          </label>
          <label>
            <input type="checkbox"
              value="React" v-model={this.checkedNames} />
            React
          </label>
          <label>
            <input type="checkbox"
              value="Angular" v-model={this.checkedNames} />
            Angular
          </label>
        </div>
      </section>
    );
  },
};
</script>

