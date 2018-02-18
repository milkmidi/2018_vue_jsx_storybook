import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Styled from 'vue-styled-components';
import { range } from 'lodash';

import img from 'img/pipi.jpg';
import UserProfile from './';

const UserProfileRoot = Styled.div`
  width: 400px;
  position: relative;
  margin: 0 auto;
`;

Vue.component('UserProfile', UserProfile);

storiesOf('UserProfile', module)
  .add('UserProfile', () => ({
    render() {
      return (
        <UserProfileRoot>
          <UserProfile
            name="milkmidi"
            img={img}
            description="我喜歡吃罐罐"
            followers={214800}
            following={9527}
            />
        </UserProfileRoot>
      );
    },
  }))
  .add('UserProfile2', () => ({
    render() {
      return (
        <UserProfileRoot>
          <UserProfile
            name="akb"
            img={require('img/akbfans.jpg')}
            description={range(50).reduce(prev => `${prev}，吃罐罐`, '我喜歡吃罐罐')}
            followers={2148000000000123123}
            following={9527987897897}
            />
        </UserProfileRoot>
      );
    },
  }))
  .add('Loading', () => ({
    methods: {
      log() {
      },
    },
    render() {
      return (
        <UserProfileRoot>
          <UserProfile class="loading" />
        </UserProfileRoot>
      );
    },
  }));
