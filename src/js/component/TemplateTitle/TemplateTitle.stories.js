import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';


import TemplateH1 from './';

storiesOf('TemplateTitle', module)
  .addDecorator(Centered)
  .add('basic', () => ({
    render() {
      return <TemplateH1 title="我是Title" sub="我是SubTitle" />;
    },
  }))
  .add('multi line', () => ({
    render() {
      return <TemplateH1 title="我是Title,12345" sub='我是SubTitle,我是SubTitle1,我是SubTitle2' />;
    },
  }))
  .add('http', () => ({
    render() {
      return <TemplateH1 title="我是Title" sub="http://milkmidi.blogspot.com" />;
    },
  }))
  .add('img', () => ({
    render() {
      return <TemplateH1 title="我是Title" sub="Sub" img={require('img/milkmidi.png')}/>;
    },
  }));

