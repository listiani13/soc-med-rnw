// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from '@material-ui/core';
import {Text} from '../../../core-ui';
import getInitialName from '../../../helpers/getInitialName';
import {GREY} from '../../../constants/color';
import {AVATAR_SIZE} from '../../../constants/size';
import {FONT_SIZE} from '../../../constants/text';

type Props = {
  name: string,
  username: string,
};
export default function DetailHeader(props: Props) {
  let {name, username} = props;
  return (
    <View style={styles.header}>
      <Avatar style={stylesMUI.avatar}>{getInitialName(name)}</Avatar>
      <View style={styles.titleContainer}>
        <Text size="large">{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  username: {
    color: GREY,
  },
});

const stylesMUI = {
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    marginRight: 25,
    fontSize: FONT_SIZE.xlarge,
  },
};
