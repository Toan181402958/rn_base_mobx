import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {getTokenLocal, saveTokenLocal} from './src/services/storage';
import BaseText from './src/shared/ui/components/Text/BaseText';
import AppNavigator from './src/navigation/AppNavigator';
import {StoreProvider} from '@src/services/storeProvider';
import UIStore from '@src/shared/store/ui';
import UserStore from '@src/shared/store/user';
import CreateStore from '@src/shared/store/create';
import {observer} from 'mobx-react';
import Toast from 'react-native-toast-message';
import {toastConfig} from '@src/utils/ToastConfig';
import {ThemeProvider} from '@src/services/ThemeContext';

type Props = {};
const AppContainer = (props: Props) => {
  const {} = props;
  const [uiStore] = useState(() => new UIStore());
  const [userStore] = useState(() => new UserStore());
  const [createStore] = useState(() => new CreateStore());
  return (
    <ThemeProvider>
      <AppNavigator
        uiStore={uiStore}
        userStore={userStore}
        createStore={createStore}
      />
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default observer(AppContainer);
