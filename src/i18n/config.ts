import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ns1 from './en/en.json'
import ns2 from './es/es.json'

export const defaultNS = 'ns2'
export const resources = {
  en: {
    translation: ns1
  },
  es: {
    translation: ns2
  }
} as const

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('lang') || 'es',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  fallbackLng: 'es',
  resources,
})
