<script>

const ChildComponent = {
  functional: true,
  props: {
    name: String,
    age: Number,
  },
  render(h, { props }) {
    return (
      <div class="child-jsx">
        <h3>{props.name} - {props.age}</h3>
      </div>
    );
  },
};

export default {
  data() {
    return {
      list: [
        { name: 'milkmidi', age: 18 },
        { name: '奶綠茶', age: 17 },
      ],
    };
  },
  render() {
    return (
      <div>
        {
          this.list.map(o =>
            <ChildComponent
              key={o.name}
              {...{ props: o }}
              />)
        }
      </div>
    );
  },
};
</script>

