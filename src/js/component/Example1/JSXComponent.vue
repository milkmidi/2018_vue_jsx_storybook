<script>
export default {
  data: () => ({
    list: [0, 1, 2, 3],
  }),
  render() {
    return (
      <section>
        {
          this.list.map(v =>
            <div class="box" key={`${v}`}>{v}</div>)
        }
      </section>
    );
  },
};
</script>
