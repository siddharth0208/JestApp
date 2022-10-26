import 'react-native';
import React from 'react';
import Register from '../src/screens/Register';

import renderer from 'react-test-renderer';

test('Register snapshot', () => {
  const snapshot = renderer.create(<Register />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
