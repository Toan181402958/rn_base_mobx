import BaseText from '@src/shared/ui/components/Text/BaseText';
import {paddingTop} from '@src/shared/ui/styles/common.styles';
import {styleView} from '@src/shared/ui/styles/styleView';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BaseToast, ErrorToast, ToastConfig} from 'react-native-toast-message';
/*
  1. Create the config
*/
export const toastConfig: ToastConfig | undefined | any = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 14,
        fontWeight: '400',
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  cusToast: ({text1, props}: {text1: string; props: any}) => (
    <View style={styles.cusToast}>
      <BaseText fontWeight="500" color="#fff" content={text1} />
    </View>
  ),
};
const styles = StyleSheet.create({
  cusToast: {
    ...styleView.centerItem,
    backgroundColor: '#09BD4E',
    // width: '70%',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: paddingTop - 18,
    paddingHorizontal: 24,
  },
});
