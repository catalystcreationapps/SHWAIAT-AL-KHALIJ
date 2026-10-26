import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
};

export const updateDocumentDirection = (lng: string) => {
  const isArabic = lng === 'ar';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  
  if (isArabic) {
    document.documentElement.classList.add('rtl');
    document.documentElement.classList.remove('ltr');
  } else {
    document.documentElement.classList.add('ltr');
    document.documentElement.classList.remove('rtl');
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Default to English as requested
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupLocalStorage: 'shwaiat_lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Apply document direction whenever language changes
i18n.on('languageChanged', (lng) => {
  updateDocumentDirection(lng);
  try {
    localStorage.setItem('shwaiat_lang', lng);
  } catch {
    // ignore
  }
});

// Initial direction
updateDocumentDirection(i18n.language || 'en');

export default i18n;
