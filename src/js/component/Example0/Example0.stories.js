
import { storiesOf } from '@storybook/vue';
import Example1 from './';

storiesOf('Example0', module)
  .add('Example0', () => ({
    render() {
      return (<Example1 />);
    },
  }));
