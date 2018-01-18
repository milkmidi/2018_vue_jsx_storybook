import { action } from '@storybook/addon-actions';
// import styled from 'vue-styled-components';
import Vue from 'vue';


Vue.component('router-link', {
  props: {
    to: String,
  },
  methods: {
    clickHandler(e) {
      e.preventDefault();
      action('router-link')(this.to);
    },
  },
  render() {
    return <a onClick={this.clickHandler} href={this.to} >{this.$slots.default}</a>;
  },
});


const RouterView = () => <div>FakeRouterView</div>;

Vue.component('router-view', RouterView);
