import i18n, { init } from'i18next'
import { initReactI18next } from 'react-i18next'
import { defaultLanguage } from './languageConfig'
import en from './en.json'
import vi from './vi.json'

const resources = {
    en: { translation: en },
    vi: { translation: vi },
  };
i18n
.use(initReactI18next)
.init({
    resources,
    fallbackLng: defaultLanguage,
})
export default i18n