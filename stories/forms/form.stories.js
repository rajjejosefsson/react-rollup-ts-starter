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

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'Example 1',
    withInfo()(() => {
      return (
        <form
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '10px',
            padding: '10px',
          }}
        >
          <div>
            <label>First name</label>
            <input className="input" placeholder={'type..'} />
          </div>
          <div>
            <label>Last name</label>
            <input className="input" placeholder={'type..'} />
          </div>
          <div>
            <label>Food</label>
            <select className="select select__icon">
              <option value="option_1">Option 1</option>
              <option value="option_2">Option 2</option>
              <option value="option_3">Option 3</option>
            </select>
          </div>
          <div style={{ gridRow: '3' }}>
            <label>Phone</label>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr' }}>
              <select className="select select__icon">
                <option value="option_1">+46</option>
                <option value="option_2">+34</option>
                <option value="option_3">+71</option>
              </select>
              <input className="input" placeholder={'type..'} />
            </div>
          </div>
          <div style={{ gridRow: '3' }}>
            <label>City</label>
            <input className="input" placeholder={'type..'} />
          </div>
          <footer
            style={{
              gridColumn: 'span 2',
              gridRow: 'auto',
              justifySelf: 'end',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '10px',
              }}
            >
              <button className="btn btn--negative">Cancel</button>
              <button className="btn btn--primary">Submit</button>
            </div>
          </footer>
        </form>
      );
    }),
  );
