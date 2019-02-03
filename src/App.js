// @flow

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {WHITE} from './constants/color';
import MainRoute from './routes/MainRoute';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MainRoute />
      </View>
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
