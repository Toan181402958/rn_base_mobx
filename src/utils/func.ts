import { Platform, StyleSheet } from "react-native";
import { checkNotifications, requestNotifications } from "react-native-permissions";
import messaging from '@react-native-firebase/messaging';


const enhance = (arrStyle: Array<any>) => {
  return StyleSheet.flatten(arrStyle)
}

const requestNotificationPermission = async () => {
var permissionNoti: boolean;

  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const result = await requestNotifications(['alert', 'badge', 'sound']);
    permissionNoti = result.status === 'granted';
  } else {
    const result = await messaging().requestPermission();

    permissionNoti =
      result === messaging.AuthorizationStatus.AUTHORIZED ||
      result === messaging.AuthorizationStatus.PROVISIONAL;
  }
  return permissionNoti;
};

const checkNotificationPermission = async () => {
var permissionNoti: boolean;

  if (Platform.OS === 'android' && Platform.Version >= 33) {
    let result = await checkNotifications();
    permissionNoti = result.status === 'granted';
  } else {
    const authStatus = await messaging().hasPermission();
    console.log("🚀 ~ checkNotificationPermission ~ authStatus:", authStatus)
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    permissionNoti = enabled;
  }
  return permissionNoti;
};



export {enhance, requestNotificationPermission, checkNotificationPermission}