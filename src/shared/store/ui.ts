import { getObjectDataLocal, saveObjectDataLocal } from "@src/services/storage";
import { KEY_STORAGE, TYPE_LANGUAGE } from "@src/utils/constants";
import i18n from '@src/assets/locales/index';
import {makeAutoObservable} from 'mobx';

export default class UIStore {
  locale: string = TYPE_LANGUAGE.EN;
  constructor() {
    makeAutoObservable(this);
        // Initialize your store properties here
        getObjectDataLocal(KEY_STORAGE.LOCALE).then(res => {
          if (!!res) {
            this.locale = res;
            i18n.changeLanguage(res);
          } else {
            // const localeDevice = getLocales()[0].languageCode.toLocaleLowerCase();
            var valueLanguage = TYPE_LANGUAGE.EN;
            //get language from device
            // if (!!dataLocale.find(item => item.value === localeDevice)) {
            //   valueLanguage = localeDevice;
            // }
            this.locale = valueLanguage;
            i18n.changeLanguage(valueLanguage);
          }
        });
      }
    
      // Define your store methods and actions here
  //change locale
  changeLocale = (locale: string) => {
    console.log("🚀 ~ UIStore ~ locale:", locale)
    this.locale = locale;
    i18n.changeLanguage(locale);
    saveObjectDataLocal(KEY_STORAGE.LOCALE, locale);
  };
}