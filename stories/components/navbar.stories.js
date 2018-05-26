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

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add(
    'Navbar',
    withInfo()(() => {
      return (
        <header
          className="box-shadow"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr',
            alignItems: 'center',
            padding: '16px',
          }}
        >
          <span>🍎</span>
          <input
            className="input input-text-search"
            style={{ width: '100%', maxWidth: '800px' }}
            placeholder="search"
          />
          <div
            style={{
              justifySelf: 'end',
              gridTemplateColumns: '1fr 1fr',
              display: 'grid',
            }}
          >
            <p>Icon</p>
            <p>Rasmus</p>
          </div>
        </header>
      );
    }),
  );
