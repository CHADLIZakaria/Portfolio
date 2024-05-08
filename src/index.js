import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { LanguageProvider } from "./contexts/LanguageContext.js";

const storedLanguage = JSON.parse(localStorage.getItem('lang'));
const initialLanguage = storedLanguage === null ? 'en' : storedLanguage;

i18next.use(initReactI18next).init({
  interpolation: {escapeValue: false},
  lng: initialLanguage,
  resources: {
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <LanguageProvider>
          <App />
      </LanguageProvider>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();