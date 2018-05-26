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
    'Input',
    withInfo()(() => {
      const placeholder = text('Placeholder', 'Search...');

      return <input className="input" placeholder={placeholder} />;
    }),
  )
  .add(
    'Input With password',
    withInfo()(() => {
      const placeholder = text('Placeholder', 'Search...');

      return (
        <div className="pos-relative">
          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="input"
          />
          <span className="progresswrapper">
            <span className="progress percentage-75" />
          </span>
        </div>
      );
    }),
  );
