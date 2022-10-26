import 'react-native';
import React from 'react';
import PostDetails from '../src/screens/PostDetails';

import renderer from 'react-test-renderer';

test('Post Details snapshot', () => {
  const snapshot = renderer.create(<PostDetails />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
