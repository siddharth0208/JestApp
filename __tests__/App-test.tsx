/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

test('App snapshot', () => {
  const snapshot = renderer.create(<App />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
