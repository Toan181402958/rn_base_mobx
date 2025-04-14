import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
// import SkeletonLoader from './SkeletonLoader';
import AppStyle from '../styles/app.styles';
import R from '../../../assets/R';
import Skeleton from './Skeleton';

type Props = {
  content: string;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontWeight?: '400' | '500' | '600' | '700' | '800';
  lineHeight?: number;
  fontFamily?:
    | 'BeVietnamPro-Regular'
    | 'BeVietnamPro-Medium'
    | 'BeVietnamPro-SemiBold';
  letterSpacing?: number;
  numberOfLines?: number;
  color?: string;
  isLoading?: boolean;
  onpress?: () => void;
};
const BaseText = (props: Props) => {
  const {
    content,
    style,
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily = 'BeVietnamPro-Regular',
    letterSpacing = 0.25,
    numberOfLines,
    color = '#1F2128',
    isLoading,
    onpress,
  } = props;
  return (
    <Text
      onPress={onpress}
      numberOfLines={numberOfLines}
      style={[
        styles.txt,
        style,
        {
          fontSize: fontSize,
          fontWeight: fontWeight,
          lineHeight,
          color,
          fontFamily,
          letterSpacing,
        },
      ]}
      children={content}
    />
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#000',
  },
  box_skeleton: {
    height: 20,
    width: AppStyle.Screen.FullWidth * 0.3,
  },
});

export default BaseText;
