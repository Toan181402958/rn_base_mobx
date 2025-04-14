import i18n from '@src/assets/locales/index';

function strings() {
  return {
    home: i18n.t('home', {defaultValue: ''}),
    notification: i18n.t('notification', {defaultValue: ''}),
    cancel: i18n.t('cancel', {defaultValue: ''}),
    ok: i18n.t('ok', {defaultValue: ''}),
    try_again: i18n.t('try_again', {defaultValue: ''}),
    setting: i18n.t('setting', {defaultValue: ''}),
  };
}
export default strings;
