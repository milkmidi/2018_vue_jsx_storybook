import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';

import TemplateImage from './';


import img from '~img/eye.jpg';

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
        <TemplateImage img={img} />
      );
    },
  }));

