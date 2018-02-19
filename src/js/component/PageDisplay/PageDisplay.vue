<script>

export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  data: () => ({
    editMode: false,
    dataPage: 0,
  }),
  watch: {
    currentPage(val) {
      this.dataPage = val + 1;
    },
  },
  mounted() {
    this.dataPage = (this.currentPage || 0) + 1;
  },
  methods: {
    elementClickHandler() {
      this.editMode = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    changeHandler(e) {
      this.dataPage = Math.min(Math.max(1, e.target.value), this.totalPages);
      this.$emit('input', this.dataPage - 1);
    },
    blurHandler() {
      this.editMode = false;
    },
  },
  render() {
    return (
      <div class="page-display">
        {
          this.editMode
          ? (
            <div class="page-display-edit">
              <input
                ref="input"
                type="number"
                onInput={this.changeHandler}
                onBlur={this.blurHandler}
                value={this.dataPage}/> / {this.totalPages}
            </div>
          )
          : (
            <div class="page-display-mode" onClick={this.elementClickHandler}>
              {this.currentPage + 1} / {this.totalPages}
            </div>
          )
        }
      </div>
    );
  },
};
</script>


<style lang="stylus">
  .page-display
    font-size 20px
    .page-display-edit
      input 
        width 60px
</style>