import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';

import PageDisplay from './';

storiesOf('PageDisplay', module)
  .addDecorator(Centered)
  .add('Basic', () => ({
    render() {
      return (
        <PageDisplay currentPage={1} totalPages={10}/>
      );
    },
  }));
