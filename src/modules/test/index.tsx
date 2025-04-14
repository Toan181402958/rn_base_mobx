import React, {useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AppStyle from '@src/shared/ui/styles/app.styles';
import ScreenWrapper from '@src/shared/ui/components/ScreenWrapper';
import {observer} from 'mobx-react';
import UIStore from '@src/shared/store/ui';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import R from '@src/assets/R';
import {TYPE_LANGUAGE} from '@src/utils/constants';
import {styleIcon, styleView} from '@src/shared/ui/styles/styleView';
import BaseText from '@src/shared/ui/components/BaseText';
import Skeleton from '@src/shared/ui/components/Skeleton';
import FstImage from '@src/shared/ui/components/FstImage';
import {Block} from '@src/shared/ui/components/Block/Block';
import navigationHelper from '@src/utils/navigationHelper';

type Props = {
  uiStore: UIStore;
};

const TestScreen = observer(({uiStore}: Props) => {
  useEffect(() => {}, [uiStore.locale]);
  return (
    <ScreenWrapper
      children={
        <View style={styles.container}>
          <BaseText content={R.strings().home} />
          <Button
            title={'change locale'}
            onPress={() => {
              navigationHelper.goBack();
              // uiStore.changeLocale(
              //   uiStore.locale === TYPE_LANGUAGE.EN
              //     ? TYPE_LANGUAGE.VI
              //     : TYPE_LANGUAGE.EN,
              // );
            }}
          />
          <FstImage
            source={R.images.ic_home}
            style={{height: 300, width: 300}}
          />
          <Block
            height={30}
            width={400}
            direction="row"
            color={AppStyle.Colors.primary}></Block>
        </View>
      }
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: AppStyle.Screen.FullHeight,
    width: AppStyle.Screen.FullWidth,
    ...styleView.centerItem,
  },
});

export default TestScreen;
