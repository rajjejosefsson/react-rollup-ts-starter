import * as React from 'react';
import Modal from './Modal';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const tree = create(<Modal />).toJSON();
  expect(tree).toMatchSnapshot();
});
