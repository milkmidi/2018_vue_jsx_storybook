<script>


const ChildFunctionalComponent = () => (
  <div class="child-component">
    child-functional-component
  </div>
);

/* const ChildFunctionalComponent2 = {
  functional: true,
  render(h, { props, listeners }) {
    return (
      <section class="jsx-functional" onClick={listeners.click}>
      hi , jsx functional {props.name}
      </section>
    );
  },
}; */

const ChildRenderComponent = {
  data() {
    return {
      name: 'child-component',
    };
  },
  render() {
    return (
      <div class="child-component">
        {this.name}
      </div>
    );
  },
};

const SlotComponent = {
  functional: true,
  render(h, { props, children, slots }) {
    // console.log(props);
    // console.log(children);
    // console.log(slots());
    return children;
  },
};

// 不能這樣寫，因為沒有出現 jsx tag, 不會過 babel-plugin-jsx-vue-functional
const SlotComponent2 = ({ props, children, slots }) => {
  console.log(props);
  console.log(children);
  console.log(slots());
  return children;
};

export default {
  data: () => ({
    name: 'jsxcomponent',
    list: [0, 1, 2, 3],
    users: [
      { name: 'milkmidi', age: 18 },
    ],
  }),
  components: {
    // ChildComponent, jsx 風格，這裡可以不用寫
  },
  render() {
    return (
      <div class="jsxcomponent">
        <h2>{this.name}</h2>
        <SlotComponent name="slot">
          <h1>123</h1>
          <h1>456</h1>
        </SlotComponent>
        <ChildRenderComponent />
        <ChildFunctionalComponent />
        <input type="text" v-model={this.name} />
        {
          this.list.map(v => <p key={v.toString()}>{v}</p>)
        }
      </div>
    );
  },
};

</script>

