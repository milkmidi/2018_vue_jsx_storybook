<script>
export default {
  data: () => ({
    money: 100,
  }),
  render() {
    return (
      <section>
        <p>money:{this.money}</p>
        <p>us:{this.money * 30}</p>
        <p>jp:{this.money / 3}</p>
      </section>
    );
  },
};
</script>
