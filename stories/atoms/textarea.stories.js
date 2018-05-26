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
    'Atoms',
    withInfo()(() => {
      return (
        <textarea
          class="textarea"
          rows="10"
          cols="50"
          placeholder="You can write your message in here"
        />
      );
    }),
  );
