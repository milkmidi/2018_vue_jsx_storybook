<script>
export default {
  data() {
    return {
      name: 'milkmidi',
      markdown: require('./JSXComponent.md'),
    };
  },
  render() {
    return (
      <div class="jsx-component">
        <h2>{this.name}</h2>
        <div class="markdown" domPropsInnerHTML={this.markdown}></div>
      </div>
    );
  },
};
</script>
