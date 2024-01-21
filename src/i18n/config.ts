import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import zhCN from './locales/zh-CN.json'
import jaJP from './locales/ja-JP.json'

const defaultLanguage = 'zh-CN'

export const defaultNamespace = 'default'

export const resources = {
  'zh-CN': {
    [defaultNamespace]: zhCN,
  },
  'ja-JP': {
    [defaultNamespace]: jaJP,
  },
}

i18n.use(initReactI18next).init({
  defaultNS: defaultNamespace,
  ns: [defaultNamespace],
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n