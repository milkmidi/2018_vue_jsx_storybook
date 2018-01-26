import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import Styled from 'vue-styled-components';

import Example1 from './';

const Example1Root = Styled.div`
`;

Vue.component('Example1', Example1);
Vue.component('Example1Root', Example1Root);

storiesOf('Example1', module)
  // .addDecorator(Centered)
  .add('Example1', () => ({
    methods: {
      log() {
        action('Example1')();
      },
    },
    render() {
      return (
        <Example1Root>
          <Example1 />
        </Example1Root>
      );
    },
  }));
