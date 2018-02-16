import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';

import TemplateImage from './';


storiesOf('TemplateImage', module)
  .addDecorator(Centered)
  .add('basic', () => ({
    data() {
      return {
      };
    },
    methods: {
    },
    render() {
      return (
        <TemplateImage img={require('img/milkmidi.png')} />
      );
    },
  }));

