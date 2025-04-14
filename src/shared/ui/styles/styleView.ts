import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import AppStyle from './app.styles';
import { isIphoneX } from '../../../utils/iphonexHelper';

type styleViewKey =
  | 'centerItem'
  | 'rowItem'
  | 'rowItemBetween'
  | 'rowItemCenterBetween'
  | 'rowItemAround'
  | 'rowItemEvenly'
  | 'shadowStyle'
  | 'shadowPrimary'
  | 'paddingBottomScreen'
  | 'rowItemCenter'
  | 'blur';
export const styleView: Record<styleViewKey, ViewStyle> = {
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  shadowPrimary: {
    shadowColor: AppStyle.Colors.primary,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  rowItem: {
    flexDirection: 'row',
  },
  rowItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItemBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItemCenterBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowItemAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowItemEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  paddingBottomScreen: {
    paddingBottom: isIphoneX() ? 20 : 0,
  },
  blur: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0
  }
};

type styleImageKey =
  | 'icon48'
  | 'icon37'
  | 'icon32'
  | 'icon26'
  | 'icon24'
  | 'icon20'
  | 'icon18'
  | 'icon16'
  | 'icon10';
export const styleIcon: Record<styleImageKey, ImageStyle> = {
  icon48: {
    height: 48,
    width: 48,
  },
  icon37: {
    height: 37,
    width: 37,
  },
  icon32: {
    height: 32,
    width: 32,
  },
  icon26: {
    height: 26,
    width: 26,
  },
  icon24: {
    height: 24,
    width: 24,
  },
  icon20: {
    height: 20,
    width: 20,
  },
  icon18: {
    height: 18,
    width: 18,
  },
  icon16: {
    height: 16,
    width: 16,
  },
  icon10: {
    height: 10,
    width: 10,
  },
};
