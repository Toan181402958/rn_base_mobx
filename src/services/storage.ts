import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';


async function saveDataLocal(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(`ERROR_save-${key}`, error);
  }
}

async function getDataLocal(key: string) {
  try {
    if (key) {
      const value = await AsyncStorage.getItem(key);
      return value === null ? null : value;
    }
  } catch (error) {
    console.log(`ERROR_get-${key}`, error);
  }
}

async function saveObjectDataLocal(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`ERROR_save-${key}`, error);
  }
}

async function getObjectDataLocal(key: string) {
  try {
    if (key) {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
  } catch (error) {
    console.log(`ERROR_save-${key}`, error);
  }
}

async function clearDataLocal(key?: string) {
  if (key) {
    await AsyncStorage.removeItem(key);
  } else {
    await AsyncStorage.getAllKeys((error, keys) => {
      keys && AsyncStorage.multiRemove(keys, () => {});
    });
  }
}

//token with keychain
async function saveTokenLocal(token: string) {
  try{
    await Keychain.setGenericPassword('auth', token)
  }catch (error) {
    console.log(`ERROR_save-token-keychain`, error);
  }
}

async function getTokenLocal() {
  try{
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return credentials.password;
    } else {
      return null;
    }
  }catch (error) {
    console.log(`ERROR_get-token-keychain`, error);
  }
}


export {
  saveDataLocal,
  getDataLocal,
  saveObjectDataLocal,
  getObjectDataLocal,
  clearDataLocal,
  saveTokenLocal,
  getTokenLocal
};
