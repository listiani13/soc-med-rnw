// @flow
import React from 'react';
import {render} from 'react-testing-library';
import Text from '../Text';

describe('Text component', () => {
  it('should render small text', () => {
    let {container} = render(<Text size="small">Hello</Text>);
    expect(container).toMatchSnapshot();
  });
  it('should render bold large text', () => {
    let {container} = render(
      <Text size="large" fontWeight="500">
        Hello
      </Text>,
    );
    expect(container).toMatchSnapshot();
  });
});
