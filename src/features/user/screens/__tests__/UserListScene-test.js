import React from 'react';
import {render} from 'react-testing-library';
import {HashRouter} from 'react-router-dom';
import {MockedProvider} from 'react-apollo/test-utils';
import UserListScene from '../UserListScene';
import {GET_USER_LIST} from '../../../../graphql/queries/users';
import wait from 'waait';

describe('UserListScene', () => {
  let mocks = [
    {
      request: {
        query: GET_USER_LIST,
      },
      result: {
        data: {
          data: [
            {
              id: 1,
              name: 'Leanne Graham',
              username: 'Bret',
              email: 'Sincere@april.biz',
              phone: '1-770-736-8031 x56442',
              website: 'hildegard.org',
            },
          ],
        },
      },
    },
  ];

  it('renders without crashing', async () => {
    let {container} = render(
      <HashRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <UserListScene />
        </MockedProvider>
      </HashRouter>,
    );
    // NOTE: Wait to get first query result
    await wait(10);
    expect(container).toMatchSnapshot();
  });
});
