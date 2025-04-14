import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PropsStore} from '@src/shared/types/index.props';
import React from 'react';
import PreloadScreen from '../modules/preload';
import {ROUTER_APP} from '../utils/constants';
import navigationHelper from '../utils/navigationHelper';
import TabNavigator from './TabNavigator';
import TestScreen from '@src/modules/test';
import UIStore from '@src/shared/store/ui';
import UserStore from '@src/shared/store/user';
import CreateStore from '@src/shared/store/create';

const APP_STACK = {
  [ROUTER_APP.RELOAD]: PreloadScreen,
  [ROUTER_APP.TEST]: TestScreen,
};
const StackApp = (
  uiStore: UIStore,
  userStore: UserStore,
  createStore: CreateStore,
) => {
  return Object.keys(APP_STACK).map((key: string) => {
    const Component = APP_STACK[key];
    return (
      <Stack.Screen
        key={key}
        name={key}
        children={props => (
          <Component
            uiStore={uiStore}
            userStore={userStore}
            createStore={createStore}
          />
        )}
      />
    );
  });
};

const Stack = createNativeStackNavigator();

const AppNavigator = (props: PropsStore) => {
  const {uiStore, userStore, createStore} = props;

  return (
    <NavigationContainer
      ref={ref => {
        navigationHelper.setTopLevelNavigator(ref);
      }}>
      <Stack.Navigator
        initialRouteName={ROUTER_APP.RELOAD}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {StackApp(uiStore, userStore, createStore)}
        <Stack.Screen
          name={ROUTER_APP.MAIN_TAB}
          children={props => (
            <TabNavigator
              uiStore={uiStore}
              userStore={userStore}
              createStore={createStore}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
