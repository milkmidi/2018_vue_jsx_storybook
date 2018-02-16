import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme, withDocs } from 'storybook-readme';
import styled from 'vue-styled-components';

import DemoButton from './';
import README from './README.md';


const DemoButtonRoot = styled.div`
  padding: 30px;
  background: #d3d3d3;
`;


storiesOf('DemoButton', module)
  .addDecorator(Centered)
  .add('DemoButton', withDocs(README, () => ({
    data() {
      return {
        label: 'hi, vue jsx',
        isRounded: false,
      };
    },
    methods: {
      clickHandler() {
        action('DemoButton')('click');
      },
    },
    render() {
      return (
        <DemoButtonRoot>
          <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
        </DemoButtonRoot>
      );
    },
  })))
  .add('DemoButton round', withReadme(README, () => ({
    data() {
      return {
        label: 'hi, vue jsx',
        isRounded: true,
      };
    },
    methods: {
      clickHandler() {
        action('DemoButton')('click');
      },
    },
    render() {
      return (
        <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
      );
    },
  })));
