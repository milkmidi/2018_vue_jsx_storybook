<script>

const IconBTN = ({ props, listeners }) => {
  const { mode, value, iconName = 'fa-angle-double-up' } = props;
  if (mode === value) {
    return null;
  }
  return (
    <div class={`fa fa-lg icon-btn ${iconName}`}
      onClick={() => listeners.setMode(props.value)} />
  );
};

const Template = {
  props: ['standard', 'jsx'],
  data() {
    return {
      mode: 0,
    };
  },
  methods: {
    setMode(m) {
      this.mode = m;
    },
  },
  render() {
    const { $slots, mode } = this;
    let leftClass = 'col-6';
    let rightClass = 'col-6';
    if (mode === 1) {
      leftClass = 'col-12';
      rightClass = 'none';
    } else if (mode === 2) {
      leftClass = 'none';
      rightClass = 'col-12';
    }
    return (
      <div class="container-fluid template">
        <div class="kv-text text-center">
        { $slots.title }
        </div>
        <div class="row content">
          <IconBTN
            iconName="fa-close"
            value={0}
            mode={mode}
            onSetMode={this.setMode} />
          <div class={`${leftClass} animate`}>
            <div class="standard-vue">
              <IconBTN
                value={1}
                mode={mode}
                onSetMode={this.setMode} />
              {$slots.standard}
              <div class="markdown"
                domPropsInnerHTML={this.standard} />
            </div>
          </div>
          <div class={`${rightClass} animate`}>
            <div class="jsx-component">
              <IconBTN
                value={2}
                mode={mode}
                onSetMode={this.setMode} />
              {$slots.jsx}
              <div class="markdown"
                domPropsInnerHTML={this.jsx} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
export default Template;
</script>

<style lang="stylus">
  .template
    pre
      font-size 120% !important
    .animate
      transition all 0.3s
    .kv-text
      h1
        padding 20px 0 10px
        font-size 4rem
    .markdown
      padding-top 20px
    .content
      position relative
    .icon-btn
      position absolute
      top 15px
      right @top
      font-size 30px
      cursor pointer
      &:hover
        transform scale(1.2)
    .fa-close
      z-index 9999
      right 30px
    .standard-vue
    .jsx-component
      position relative
      padding 10px
      border 1px solid #787878
      &:before
        display block
        top 1px
        left 2px
        font-size 24px
        padding-bottom 20px
    .standard-vue
      &:before
        content 'vue'
    .jsx-component
      background-color #ecf0f1
      &:before
        content 'jsx'
    .none
      max-width 0
      visibility hidden
      overflow hidden
</style>
