// @flow

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import client from './graphql/clientStore';
import {WHITE} from './constants/color';
import MainRoute from './routes/MainRoute';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <MainRoute />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    flexDirection: 'row',
    height: '100%',
  },
});
