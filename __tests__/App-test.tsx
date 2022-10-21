import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native';
import PostDetails from '../src/screens/PostDetails';
test('renders correctly', () => {
  const tree = renderer
    .create(<PostDetails navigation={undefined} route={undefined} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
