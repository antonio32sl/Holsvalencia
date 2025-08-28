import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, TranslationValue } from './translations';

// Define types for language context
type LanguageContextType = {
  currentLanguage: string;
  t: (key: string) => string;
  setLanguage: (language: string) => void;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  t: () => '',
  setLanguage: () => {},
});

// Hook to use language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Get browser language or default to English
  const getBrowserLanguage = (): string => {
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'es', 'ca', 'fr'].includes(browserLang) ? browserLang : 'en';
  };
  
  // Initialize with browser language or saved preference
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('preferredLanguage') || getBrowserLanguage()
  );

  // Function to translate a key
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: TranslationValue = translations[currentLanguage];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English if key not found in current language
        let fallback = translations['en'];
        for (const fbk of keys) {
          if (fallback && typeof fallback === 'object' && fbk in fallback) {
            fallback = fallback[fbk];
          } else {
            return key; // Return the key if not found in any language
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  // Function to change language
  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
