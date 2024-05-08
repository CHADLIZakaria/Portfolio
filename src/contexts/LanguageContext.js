import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const storedLanguage = JSON.parse(localStorage.getItem('lang'));
    const initialLanguage = storedLanguage === null ? 'en' : storedLanguage;
    const [language, setLanguage] = useState(initialLanguage);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};