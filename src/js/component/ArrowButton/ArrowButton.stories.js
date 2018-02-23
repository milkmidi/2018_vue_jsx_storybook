import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import Styled from 'vue-styled-components';

import ArrowButton from './';

const ArrowButtonRoot = Styled.div`
  background-color: #e3e3e3;
`;

Vue.component('ArrowButton', ArrowButton);
Vue.component('ArrowButtonRoot', ArrowButtonRoot);

storiesOf('ArrowButton', module)
  .addDecorator(Centered)
  .add('basic', () => ({
    methods: {
      clickHandler() {
        action('ArrowButton')('click');
      },
    },
    template: pug`ArrowButtonRoot
    ArrowButton(@click="clickHandler")`,
  }))
  .add('right', () => ({
    methods: {
      clickHandler() {
        action('ArrowButton')('click');
      },
    },
    template: pug`ArrowButtonRoot
    ArrowButton(@click="clickHandler" right)`,
  }));

