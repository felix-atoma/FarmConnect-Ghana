// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import tw from './locales/tw/translation.json';
import ga from './locales/ga/translation.json';
import ee from './locales/ee/translation.json';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      tw: { translation: tw },
      ga: { translation: ga },
      ee: { translation: ee },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
