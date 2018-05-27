import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  selectV2,
} from '@storybook/addon-knobs/react';
// import { Types, Sizes } from '../../lib/components/Button/Button.type';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../lib';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo(
      `
     info here
    `,
    )(() => {
      const isDisabled = boolean('Disabled', false);
      const title = text('Title', 'Submit');

      // Want to import from one places but get error now
      const Types = {
        primary: 'primary',
        secondary: 'secondary',
        default: 'tertiary',
        negative: 'negative',
        deal: 'deal',
      };

      // Want to import from one places but get error now
      const Sizes = { small: 'small', regular: 'regular', big: 'big' };

      const Type = selectV2('Type', Types, Types.primary);
      const Size = selectV2('Size', Sizes, Sizes.regular);

      return (
        <Button size={Size} type={Type}>
          {title}
        </Button>
      );
    }),
  );
