import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';

import TemplateH1 from './';


storiesOf('TemplateH1', module)
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
        <TemplateH1 h1="我是h1" h4="我是 h4" />
      );
    },
  }))
  .add('http', () => ({
    data() {
      return {
      };
    },
    methods: {
    },
    render() {
      return (
        <TemplateH1 h1="我是h1" h4="http://milkmidi.blogspot.com" />
      );
    },
  }));

