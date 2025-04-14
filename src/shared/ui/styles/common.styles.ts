import { getBottomSpace, getStatusBarHeight, hasIsland } from '@src/utils/iphonexHelper';
import {Platform, StyleSheet} from 'react-native';

import {StatusBar} from 'react-native';

export const heightHeader = 56;
export const heightStatusBar =
  Platform.OS === 'android'
    ? StatusBar.currentHeight
      ? StatusBar.currentHeight + 16
      : 16
    : getStatusBarHeight() + 0;
export const paddingTop = hasIsland()
  ? heightStatusBar + 12
  : Platform.OS === 'ios'
  ? heightStatusBar + 22
  : 16;
export const heightFooter =
  Platform.OS == 'ios' ? getBottomSpace() : getBottomSpace() + 40;

export const commonStyles = StyleSheet.create({
  headerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
