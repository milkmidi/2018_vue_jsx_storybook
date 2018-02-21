import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme, withDocs } from 'storybook-readme';
import Styled from 'vue-styled-components';
import withTests from 'internal/storybook/withTests'; // eslint-disable-line

import DemoButton from './';
import README from './README.md';


const DemoButtonRoot = Styled.div`
  padding: 30px;
  background: #d3d3d3;
`;


storiesOf('RoundButton', module)
  .addDecorator(Centered)
  .addDecorator(withTests('RoundButton'))
  .add('RoundButton', withDocs(README, () => ({
    data: () => ({
      label: 'hi, vue jsx',
      isRounded: false,
    }),
    methods: {
      clickHandler() {
        action('RoundButton')('click');
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
  .add('RoundButton round', withReadme(README, () => ({
    data: () => ({
      label: 'hi, vue jsx',
      isRounded: true,
    }),
    methods: {
      clickHandler() {
        action('RoundButton')('click');
      },
    },
    render() {
      return (
        <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
      );
    },
  })));
