import * as React from 'react';
import { create } from 'react-test-renderer';

import { TextInput } from './TextInput';

it('renders correctly', () => {
  const tree = create(<TextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
