import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';

import DependenceList from './';


Vue.component('DependenceList', DependenceList);

storiesOf('DependenceList', module)
  //.addDecorator(Centered)
  .add('DependenceList', () => ({
    methods: {
      log() {
        action('DependenceList')();
      },
    },
    render() {
      return (
        <div>
          <DependenceList />
        </div>
      );
    }
  }));
