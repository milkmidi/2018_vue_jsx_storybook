import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Styled from 'vue-styled-components';
import DemoButton from './';

const Center = Styled.div`
  align-items: center;
  justify-content: center;
  display: flex;  
  width: 100%;
  height: 100vh;
`;

storiesOf('DemoButton', module)
  .add('DemoButton', () => ({
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
        <Center>
          <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
        </Center>
      );
    },
  }))
  .add('DemoButton round', () => ({
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
        <Center>
          <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
        </Center>
      );
    },
  }));
