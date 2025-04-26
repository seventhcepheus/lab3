import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      counter_one: "1 click",
      counter_other: "{{count}} clicks",
      reset: "Reset"
    }
  },
  ru: {
    translation: {
      counter_zero: "{{count}} кликов",
      counter_one: "{{count}} клик",
      counter_few: "{{count}} клика",
      counter_many: "{{count}} кликов",
      reset: "Сбросить"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources, 
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    console.log('i18n инициализирован');
  })
  .catch((err) => {
    console.error('Ошибка i18n:', err);
  });

export default i18n;