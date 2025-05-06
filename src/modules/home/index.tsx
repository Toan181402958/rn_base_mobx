import React, {useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AppStyle from '@src/shared/ui/styles/app.styles';
import ScreenWrapper from '@src/shared/ui/components/ScreenWrapper';
import {observer} from 'mobx-react';
import UIStore from '@src/shared/store/ui';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useStores} from '@src/services/storeProvider';
import {styleView} from '@src/shared/ui/styles/styleView';
import R from '@src/assets/R';
import {ROUTER_APP, TYPE_LANGUAGE} from '@src/utils/constants';
import navigationHelper from '@src/utils/navigationHelper';
import {useTheme} from '@src/services/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {homeState} from './slices/homeSlice';

type Props = {
  uiStore: UIStore;
};

const HomeScreen = observer(({uiStore}: Props) => {
  // const {uiStore, userStore} = useStores();
  const {isDarkMode, toggleTheme} = useTheme();
  const stateHome = useSelector(homeState);

  useEffect(() => {
    console.log('change locale home screen', stateHome);
  }, [uiStore.locale]);
  return (
    <ScreenWrapper
      children={
        <View style={styles.container}>
          <Button
            title={R.strings().home}
            onPress={() => {
              // console.log('test', userStore);
            }}
          />
          {__DEV__ && (
            <Button
              title={'nav test'}
              onPress={() => {
                navigationHelper.navigate(ROUTER_APP.TEST);
              }}
            />
          )}
          {__DEV__ && (
            <Button
              title={'nav list scroll'}
              onPress={() => {
                navigationHelper.navigate(ROUTER_APP.LIST_SCROLL);
              }}
            />
          )}
          {__DEV__ && (
            <Button
              title={isDarkMode ? 'dark' : 'light'}
              onPress={() => {
                toggleTheme();
              }}
            />
          )}
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

export default HomeScreen;
