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
import BaseText from '@src/shared/ui/components/Text/BaseText';
import Skeleton from '@src/shared/ui/components/Skeleton';
import FstImage from '@src/shared/ui/components/FstImage';
import {Block} from '@src/shared/ui/components/Block/Block';
import navigationHelper from '@src/utils/navigationHelper';
import {ButtonPrimary} from '@src/shared/ui/components/Button/ButtonPrimary';
import {API_URL} from '@env';

type Props = {
  uiStore: UIStore;
};

const TestScreen = observer(({uiStore}: Props) => {
  useEffect(() => {}, [uiStore.locale]);
  const testEnv = async () => {
    try {
      console.log('api_url', API_URL);
      const response = await fetch(`${API_URL}/posts`);
      const json = await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  return (
    <ScreenWrapper
      children={
        <View style={styles.container}>
          <BaseText content={R.strings().home} />
          <Button
            title={'change locale'}
            onPress={() => {
              navigationHelper.goBack();
            }}
          />
          <ButtonPrimary
            onPress={() => {
              testEnv();
            }}
            title="button"
            iconRight={R.images.ic_home}
          />
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
