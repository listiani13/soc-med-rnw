// @flow
import React from 'react';
import {render} from 'react-testing-library';
import CommentItem from '../CommentItem';

describe('Comment Item component', () => {
  it('should render Comment Item', () => {
    let {container} = render(
      <CommentItem name="Tina" body="This is content" />,
    );
    expect(container).toMatchSnapshot();
  });
});
