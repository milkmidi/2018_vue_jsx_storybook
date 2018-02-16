import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';

import TemplateImage from './';


storiesOf('TemplateImage', module)
  .addDecorator(Centered)
  .add('basic', () => ({
    render() {
      return <TemplateImage img={require('img/milkmidi.png')} sub="I'm sub Title!" />;
    },
  }))
  .add('multi line', () => ({
    render() {
      return <TemplateImage img={require('img/milkmidi.png')} sub={["I'm sub Title!", '1', '2', '3']} />;
    },
  }));

