import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import R from '@src/assets/R';
import AccountScreen from '@src/modules/account';
import HomeScreen from '@src/modules/home';
import {PropsStore} from '@src/shared/types/index.props';
import AppStyle from '@src/shared/ui/styles/app.styles';
import {styleIcon} from '@src/shared/ui/styles/styleView';
import {ROUTER_APP} from '@src/utils/constants';
import {getBottomSpace} from '@src/utils/iphonexHelper';
import React, {JSX} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TabBarOption = {
  name: string;
  icon: any;
  route: (props?: any) => JSX.Element;
  title: string;
};
const Tab = createBottomTabNavigator();

export const TAB_BAR: Record<string, TabBarOption> = {
  [ROUTER_APP.HOME]: {
    name: ROUTER_APP.HOME,
    icon: R.images.ic_home,
    title: 'Home',
    route: HomeScreen,
  },
  [ROUTER_APP.ACCOUNT]: {
    name: ROUTER_APP.ACCOUNT,
    icon: R.images.ic_home_acount,
    title: 'Account',
    route: AccountScreen,
  },
};

const TabNavigator = (props: PropsStore) => {
  const {uiStore, createStore, userStore} = props;
  return (
    <Tab.Navigator
      initialRouteName={ROUTER_APP.HOME}
      screenOptions={({navigation, route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <View style={{}}>
              <Image
                style={{
                  ...styleIcon.icon24,
                  tintColor: focused ? AppStyle.Colors.primary : undefined,
                }}
                source={TAB_BAR[route.name].icon}
              />
            </View>
          );
        },
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{color: focused ? AppStyle.Colors.primary : undefined}}
              children={TAB_BAR[route.name].name}
            />
          );
        },
        headerShown: false,
        tabBarStyle: {
          ...styles.tabbarContainer,
          display: 'flex',
        },
        tabBarButton: props => {
          return (
            <TouchableOpacity
              {...props}
              onPress={async e => {
                //something action onPress tab
                if (props.onPress) props.onPress(e);
              }}
            />
          );
        },
      })}>
      {Object.keys(TAB_BAR).map((key: string, index: number) => {
        const Component = TAB_BAR[key].route;
        return (
          <Tab.Screen
            key={index}
            name={TAB_BAR[key].name}
            children={props => <Component uiStore={uiStore} />}
          />
        );
      })}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabbarContainer: {
    height: getBottomSpace() > 0 ? getBottomSpace() + 40 + 24 : 54 + 24,
    paddingBottom: getBottomSpace(),
    paddingTop: getBottomSpace() > 0 ? 8 : 0,
    backgroundColor: 'white',
    position: 'absolute',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#9680FF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
  },
});
export default TabNavigator;
