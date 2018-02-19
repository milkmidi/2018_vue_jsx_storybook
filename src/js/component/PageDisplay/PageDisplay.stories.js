import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';

import PageDisplay from './';

storiesOf('PageDisplay', module)
  .addDecorator(Centered)
  .add('Basic', () => ({
    data: () => ({
      currentPage: 0,
    }),
    render() {
      return (
        <div>
          <PageDisplay
            currentPage={this.currentPage} totalPages={10}
            onInput={ v => this.currentPage = v}
            />
          <p>currentPage:{this.currentPage}</p>
        </div>
      );
    },
  }));
