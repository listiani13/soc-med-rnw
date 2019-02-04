// @flow

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../../core-ui';

export default function UserNotFound() {
  return (
    <View style={styles.container}>
      <Text size="xlarge" weight="bold">
        User Is Not Found!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
