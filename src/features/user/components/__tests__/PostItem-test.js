// @flow
import React from 'react';
import {render} from 'react-testing-library';
import PostItem from '../PostItem';
import {COMMENTS} from '../../../../data/comment';

describe('Post Item component', () => {
  it('should render Post Item', () => {
    let {container} = render(
      <PostItem
        name="Name"
        title="Hello World"
        content="This is body"
        comments={COMMENTS}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
