// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traduções
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(initReactI18next) // Passa o i18n para o react-i18next.
  .init({
    resources,
    lng: 'pt', // Idioma padrão.
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // React já faz o escaping das strings.
    },
  });

export default i18n;
