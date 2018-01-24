

<script>
import Vue from 'vue';

// ```

// not work!, 同一個 .vue 檔不能出現二個 template
const ChildComponent = Vue.extend({
  template: `
    <div>
      Child
    </div>
  `,
});


const JSXStyleComponent = {
  render() {
    return (
      <section class="child-jsx">
        <h1>hi, jsx</h1>
      </section>
    );
  },
};

const JSXVueFunctional = ({ props, listeners }) => (
  <section class="jsx-functional" onClick={listeners.click}>
    hi , jsx functional, {props.name}
  </section>
);

const StandardVueFunctional = {
  functional: true,
  render(h, { props, listeners }) {
    return (
      <section class="jsx-functional" onClick={listeners.click}>
      hi , jsx functional {props.name}
      </section>
    );
  },
};

export default {
  data() {
    return {
      docs2: 'abcyx',
      name: 'milkmidi',
    };
  },
  methods: {
    clickHandler(id) {
      console.log(id);
    },
  },
  mounted() {
  },
  components: {
    ChildComponent,
    JSXStyleComponent,
    JSXVueFunctional,
    StandardVueFunctional,
  },
  render() { // 當有 template 時, render 無效
    return (
      <div>null</div>
    );
  },
};
</script>


<template lang="pug">
  .about-root
    div(v-html="docs")
    input(v-model="name")
    JSXStyleComponent
    JSXVueFunctional(name="milkmidi" @click="clickHandler(1)")
    StandardVueFunctional(name="milkmidi so fat" @click="clickHandler(2)")
</template>


<style lang="stylus">
  .about-root
    section
      font-size 30px
      padding 20px 10px
      margin 5px 0
      border 1px solid black
      border-radius 2px
</style>