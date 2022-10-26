import 'react-native';
import React from 'react';
import Login from '../src/screens/Login';

import renderer from 'react-test-renderer';

test('Login snapshot', () => {
  const snapshot = renderer.create(<Login />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
