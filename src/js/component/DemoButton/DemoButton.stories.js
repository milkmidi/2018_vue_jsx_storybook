import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import DemoButton from './';


storiesOf('DemoButton', module)
  .addDecorator(Centered)
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
        <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
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
        <DemoButton rounded={this.isRounded} onClick={this.clickHandler}>{this.label}</DemoButton>
      );
    },
  }));
