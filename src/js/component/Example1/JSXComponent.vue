<script>
export default {
  data() {
    return {
      list: [0, 1, 2, 3],
    };
  },
  render() {
    return (
      <div>
        {
          this.list.map(v =>
            <div class="box" key={`${v}`}>{v}</div>)
        }
      </div>
    );
  },
};
</script>
