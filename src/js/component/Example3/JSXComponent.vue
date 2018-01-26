<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  render() {
    return (
      <div>
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
      </div>
    );
  },
};
</script>

