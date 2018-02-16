<script>
export default {
  data() {
    return {
      boolean: true,
      number: 1,
      array: [0, 1, 2, '3', '4', '5'],
    };
  },
  render() {
    return (
      <section>
        <p>{this.boolean}</p>
        <p>{this.number}</p>
        <p>{this.array}</p>
      </section>
    );
  },
};
</script>

