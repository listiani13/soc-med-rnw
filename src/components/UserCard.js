// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Avatar} from '@material-ui/core';
import {Text} from '../core-ui';
import {LIGHT_GREY} from '../constants/color';
import getInitialName from '../helpers/getInitialName';

type Props = {|
  name: string,
  username: string,
  phone: string,
  website: string,
  style?: StyleSet,
|};

export default function UserCard(params: Props) {
  let {name, username, phone, website, style} = params;
  return (
    <TouchableOpacity style={[styles.root, style]}>
      <View style={styles.container}>
        <Avatar style={stylesMUI.avatar}>{getInitialName(name)}</Avatar>
        <Text
          style={[styles.spaceBetweenContent, styles.name]}
          fontWeight="500"
        >
          {name}
        </Text>
        <Text size="xsmall" style={styles.spaceBetweenContent}>
          {username}
        </Text>
        <Text size="xsmall" style={styles.spaceBetweenContent}>
          {phone}
        </Text>
        <Text size="xsmall" style={styles.spaceBetweenContent}>
          {website}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  root: {
    width: 200,
    height: 250,
    boxShadow: '6px 5px 16px -8px rgba(0,0,0,0.38)',
    elevation: 3,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: LIGHT_GREY,
  },
  spaceBetweenContent: {
    marginBottom: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  name: {
    textAlign: 'center',
  },
});

const stylesMUI = {
  card: {
    flex: 1,
  },
  avatar: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
};
