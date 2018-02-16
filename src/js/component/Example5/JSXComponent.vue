<script>

const ChildComponent = ({ props, listeners }) => (
  <div class="child-jsx">
    <h2 onClick={listeners.pipi}>hi {props.name}</h2>
  </div>
);
/*
const ChildComponent = {
  functional: true,
  render(h, { props, listeners }) {
    return (
      <div class="child-jsx">
        <h2 onClick={listeners.pipi}>hi {props.name}</h2>
      </div>
    );
  },
};
*/

export default {
  methods: {
    click() {
      console.log('click');
    },
  },
  render() {
    return (
      <section>
        <ChildComponent
          name="milkmidi"
          onPipi={this.click} />
      </section>
    );
  },
};
</script>

