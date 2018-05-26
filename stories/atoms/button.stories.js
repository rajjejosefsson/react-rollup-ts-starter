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
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../lib';
storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo(
      `
      **Colors:**
      ~~~js
      btn--primary, btn--secondary, btn--tertiary, btn--negative btn--deal
      ~~~

      **Sizes:**
      ~~~js
      btn--small, btn--regular, btn--big
      ~~~

      **Other**
      ~~~js
      btn--disabled
      ~~~
    `,
    )(() => {
      const isDisabled = boolean('Disabled', false);
      const title = text('Title', 'Submit');

      const buttonTypeOptions = {
        Primary: 'primary',
        Secondary: 'secondary',
        Default: 'tertiary',
        Negative: 'negative',
        Deal: 'deal',
      };

      const buttonSizeOptions = {
        Small: 'small',
        Regular: 'regular',
        Big: 'big',
      };

      const buttonType = selectV2(
        'Type',
        buttonTypeOptions,
        buttonTypeOptions.Primary,
      );
      const buttonSize = selectV2(
        'Size',
        buttonSizeOptions,
        buttonSizeOptions.Regular,
      );

      return (
        <Button
          className={`btn btn--${buttonType} btn--${buttonSize} ${
            isDisabled ? 'btn--disabled' : ''
          }`}
        >
          {title}
        </Button>
      );
    }),
  );
