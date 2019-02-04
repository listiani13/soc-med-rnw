// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Avatar} from '@material-ui/core';
import {Text} from '../core-ui';
import {LIGHT_GREY} from '../constants/color';
import getInitialName from '../helpers/getInitialName';
import {AVATAR_SIZE} from '../constants/size';
import {BORDER_RADIUS, BOX_SHADOW} from '../constants/layout';

type Props = {|
  name: string,
  username: string,
  phone: string,
  website: string,
  style?: StyleSet,
  onClick?: () => void,
|};

export default function UserCard(props: Props) {
  let {name, username, phone, website, style, onClick} = props;
  return (
    <TouchableOpacity style={[styles.root, style]} onPress={onClick}>
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
    boxShadow: BOX_SHADOW,
    elevation: 3,
    borderRadius: BORDER_RADIUS,
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

// NOTE: Since Material UI can't accept StyleSheet, i'm separating it from main styles
const stylesMUI = {
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    marginBottom: 10,
  },
};
