// @flow
import {InMemoryCache, ApolloLink, ApolloClient} from 'apollo-boost';
import {RestLink} from 'apollo-link-rest';
import {withClientState} from 'apollo-link-state';

const restLink = new RestLink({uri: 'http://jsonplaceholder.typicode.com/'});

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {},
  resolvers: {},
  typeDefs: {},
});
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([restLink, stateLink]),
});

export default client;
