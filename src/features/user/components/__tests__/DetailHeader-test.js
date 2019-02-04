// @flow
import React from 'react';
import {render} from 'react-testing-library';
import DetailHeader from '../DetailHeader';

describe('Detail Header component', () => {
  it('should render Detail Header', () => {
    let {container} = render(
      <DetailHeader name="Name here" username="username" />,
    );
    expect(container).toMatchSnapshot();
  });
});
