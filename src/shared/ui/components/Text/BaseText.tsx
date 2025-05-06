import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import SkeletonLoader from './SkeletonLoader';
import AppStyle from '../../styles/app.styles';
import {BaseTextProps} from './BaseText.props';

const BaseText = (props: BaseTextProps) => {
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
    onPress,
  } = props;
  return (
    <Text
      onPress={onPress}
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
