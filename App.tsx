/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import messaging from '@react-native-firebase/messaging';
import {
  checkNotificationPermission,
  requestNotificationPermission,
} from '@src/utils/func';
import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import AppContainer from './AppContainer';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  //get fcmtoken
  const getFcmToken = async () => {
    checkNotificationPermission();
    try {
      const fcmToken = await messaging().getToken();
      console.log('🚀 ~ getFcmToken ~ fcmToken:', fcmToken);
    } catch (error) {
      console.log('🚀 ~ getFcmToken ~ error:', error);
    }
  };
  useEffect(() => {
    requestNotificationPermission();
    getFcmToken();
  }, []);

  useEffect(() => {
    // Khi app đang mở (foreground)
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('🚀 ~ [Foreground] Có thông báo:', remoteMessage);
    });

    // Khi app background, mở từ notification
    const backgroundSub = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        '🚀 ~ [Background] App được mở từ notification:',
        remoteMessage,
      );
    });

    // Khi app bị kill, mở từ notification
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            '🚀 ~ [Killed] App được mở từ notification:',
            remoteMessage,
          );
        }
      });

    return () => {
      unsubscribe();
      backgroundSub();
    };
  }, []);

  return <AppContainer />;
}

export default App;
