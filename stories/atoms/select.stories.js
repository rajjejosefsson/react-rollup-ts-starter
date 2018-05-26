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

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'Select',
    withInfo()(() => {
      return (
        <select className="select select__icon">
          <option value="option_1">Option 1</option>
          <option value="option_2">Option 2</option>
          <option value="option_3">Option 3</option>
        </select>
      );
    }),
  );
