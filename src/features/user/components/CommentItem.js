// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../../core-ui';
import {DARK_GREY} from '../../../constants/color';

type Props = {
  name: string,
  body: string,
};
export default function CommentItem(props: Props) {
  let {name, body} = props;
  return (
    <View style={styles.root}>
      <Text size="small" fontWeight="500">
        {`${name} `}
        <Text size="small" style={styles.title}>
          says:
        </Text>
      </Text>
      <Text size="xxsmall">{body}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  title: {
    color: DARK_GREY,
  },
});
