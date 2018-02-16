<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  render() {
    return (
      <section>
        <button class="btn btn-primary"
          onClick={() => this.show = !this.show}>
          Toggle</button>
        {
          this.show
            ? <div class="box lg">Yes</div>
            : null
        }
        {
          !this.show
            ? <div class="box lg">No</div>
            : null
        }
      </section>
    );
  },
};
</script>

