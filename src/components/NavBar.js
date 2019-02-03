// @flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BAHAMA_BLUE} from '../constants/color';

type State = {activeBar: ?boolean};
export default class NavBar extends Component<{}, State> {
  state = {
    activeBar: null,
  };

  render() {
    return (
      <View style={{backgroundColor: BAHAMA_BLUE, height: '100%', width: 80}}>
        <Text>View User List</Text>
      </View>
    );
  }
}
