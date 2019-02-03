// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from '../../../core-ui';

export default class UserDetailScene extends Component<{}> {
  render() {
    return (
      <View style={{paddingHorizontal: 12, paddingVertical: 5}}>
        <Text>Hello this is text</Text>
      </View>
    );
  }
}
