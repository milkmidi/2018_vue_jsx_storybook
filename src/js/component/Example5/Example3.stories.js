import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import Styled from 'vue-styled-components';

import Example2 from './';

const Example2Root = Styled.div`
`;

Vue.component('Example2', Example2);
Vue.component('Example2Root', Example2Root);

storiesOf('Example2', module)
  // .addDecorator(Centered)
  .add('Example2', () => ({
    methods: {
      log() {
        action('Example1')();
      },
    },
    render() {
      return (
        <Example2Root>
          <Example2 />
        </Example2Root>
      );
    },
  }));
