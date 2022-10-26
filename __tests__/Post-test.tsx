import 'react-native';
import React from 'react';
import Post from '../src/screens/Post';

import renderer from 'react-test-renderer';

test('post snapshot', () => {
  const snapshot = renderer.create(<Post />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
