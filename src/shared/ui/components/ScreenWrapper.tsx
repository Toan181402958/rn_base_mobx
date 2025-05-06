import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {paddingTop} from '../styles/common.styles';
import IndicatorLoading from './IndicatorLoading';
import BaseText from './Text/BaseText';
import R from '@src/assets/R';
import {styleIcon} from '../styles/styleView';
import navigationHelper from '@src/utils/navigationHelper';

type Props = {
  backgroundColor?: string;
  children: React.ReactNode;
  back?: boolean;
  isDialogLoading?: boolean;
  isIndicatorLoading?: boolean;
  title?: string;
  offsetTitle?: 'center' | 'flex-start' | 'flex-end';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  barStyle?: 'light-content' | 'dark-content';
  onPressRight?: () => void;
};
const ScreenWrapper = (props: Props) => {
  const {
    backgroundColor = '#fff',
    children,
    back,
    isDialogLoading,
    isIndicatorLoading,
    title,
    offsetTitle = 'center',
    iconLeft,
    iconRight,
    barStyle = 'dark-content',
    onPressRight,
  } = props;
  return (
    <KeyboardAvoidingView
      style={{backgroundColor: backgroundColor || 'transparent', flex: 1}}
      behavior={(Platform.OS === 'ios' && 'padding') || 'height'}
      enabled
      keyboardVerticalOffset={0}>
      {/* <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}> */}
      <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={barStyle} />
        {!!back && (
          <HeaderWrapper
            title={title}
            offsetTitle={offsetTitle}
            iconLeft={iconLeft}
            iconRight={iconRight}
            onPressRight={onPressRight}
          />
        )}
        {children}
        {/* {!!isDialogLoading && <DialogLading />} */}
        {!!isIndicatorLoading && <IndicatorLoading />}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type PropsHeader = {
  title?: string;
  offsetTitle: 'center' | 'flex-start' | 'flex-end';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isBack?: boolean;
  onPressRight?: () => void;
};
const HeaderWrapper = (props: PropsHeader) => {
  const {title, offsetTitle, iconLeft, iconRight, isBack, onPressRight} = props;
  return (
    <View style={stylesHeader.container}>
      <TouchableOpacity
        style={stylesHeader.btn_back}
        onPress={() => {
          navigationHelper.goBack();
        }}>
        <Image
          style={stylesHeader.ic_back}
          source={R.images.ic_arrow_right_black}
        />
      </TouchableOpacity>
      <View style={[stylesHeader.center, {alignItems: offsetTitle}]}>
        {!!title && (
          <BaseText
            fontSize={18}
            fontWeight="700"
            lineHeight={24}
            content={title}
          />
        )}
      </View>

      <TouchableOpacity
        style={stylesHeader.touchLeftRight}
        onPress={onPressRight}
        children={<>{!!iconRight ? iconRight : <></>}</>}
      />
    </View>
  );
};

const stylesHeader = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
    paddingTop: paddingTop,
    paddingBottom: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    paddingHorizontal: 12,
  },
  touchLeftRight: {
    width: 36,
    alignItems: 'center',
    paddingVertical: 8,
  },
  leftIcon: {
    width: 7,
    height: 14,
  },
  btn_back: {
    padding: 4,
  },
  ic_back: {
    ...styleIcon.icon24,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
});

export default ScreenWrapper;
