// @flow

import React from 'react';
import {Text as TextComp, StyleSheet} from 'react-native';
import {FONT_SIZE} from '../constants/text';
import {BAHAMA_BLUE} from '../constants/color';

type Props = {
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
  weight?: 'light' | 'reg' | 'bold' | 'black',
  primary?: boolean,
  color?: string,
  style?: StyleSet,
  fontWeight?: '100' | '200' | '300' | '400' | '500' | 'bold',
  children: ReactNode | string,
};

function Text(props: Props) {
  let {
    primary,
    weight,
    style,
    color,
    size,
    children,
    fontWeight,
    ...otherProps
  } = props;
  let fontSize = FONT_SIZE[size || 'medium'];
  let fontStyle = [
    styles.default,
    {fontSize, fontWeight},
    {color},
    primary && styles.primary,
    style && style,
  ];
  return (
    <TextComp style={fontStyle} {...otherProps}>
      {children}
    </TextComp>
  );
}

export default Text;

const styles = StyleSheet.create({
  default: {
    fontSize: FONT_SIZE['medium'],
    fontWeight: '300',
    color: BAHAMA_BLUE,
  },
  primary: {
    color: BAHAMA_BLUE,
  },
});
