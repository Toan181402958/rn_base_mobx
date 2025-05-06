import React, {useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AppStyle from '@src/shared/ui/styles/app.styles';
import ScreenWrapper from '@src/shared/ui/components/ScreenWrapper';
import {observer} from 'mobx-react';
import UIStore from '@src/shared/store/ui';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import navigationHelper from '@src/utils/navigationHelper';
import {ROUTER_APP, TYPE_LANGUAGE} from '@src/utils/constants';
import BaseText from '@src/shared/ui/components/Text/BaseText';
import {styleView} from '@src/shared/ui/styles/styleView';
import {fetchHome} from '../home/slices/homeSlice';
import {useDispatch} from 'react-redux';
import {useAppDispatch} from '@src/services/hookRedux';

type Props = {
  uiStore: UIStore;
};

const PreloadScreen = observer(({uiStore}: Props) => {
  const dispatch = useAppDispatch();
  //get data home
  const getDataHome = () => {
    dispatch(fetchHome());
  };
  useEffect(() => {
    console.log('change locale preload screen', uiStore);
    setTimeout(() => {
      getDataHome();
      navigationHelper.navigate(ROUTER_APP.MAIN_TAB);
    }, 2000);
  }, []);
  return (
    <ScreenWrapper
      children={
        <View style={styles.container}>
          <BaseText content={'Preload'} />
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

export default PreloadScreen;
