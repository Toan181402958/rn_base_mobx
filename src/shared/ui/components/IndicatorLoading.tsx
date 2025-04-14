import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AppStyle from '../styles/app.styles';
import {styleView} from '../styles/styleView';

type Props = {};
const IndicatorLoading = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...styleView.centerItem,
    backgroundColor: 'rgba(0 ,0, 0, 0.5)',
    position: 'absolute',
    height: AppStyle.Screen.FullHeight,
    width: AppStyle.Screen.FullWidth,
  },
});

export default IndicatorLoading;
