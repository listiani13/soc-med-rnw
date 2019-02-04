// @flow
import gql from 'graphql-tag';

export const GET_USER_LIST = gql`
  query getUserList {
    data @rest(type: "Persons", path: "users") {
      id
      name
      username
      website
      phone
    }
  }
`;
