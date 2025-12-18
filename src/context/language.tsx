"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, useCallback, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-language";

function getStoredLanguage(): Language | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") {
    return stored;
  }
  return null;
}

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = "fr" }: LanguageProviderProps) {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        onStoreChange();
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const getSnapshot = useCallback(() => {
    return getStoredLanguage() ?? defaultLanguage;
  }, [defaultLanguage]);

  const getServerSnapshot = useCallback(() => {
    return defaultLanguage;
  }, [defaultLanguage]);

  const storedLanguage = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [language, setLanguageState] = useState<Language>(storedLanguage);

  // Sync internal state when stored language changes (e.g., from another tab)
  useEffect(() => {
    setLanguageState(storedLanguage);
  }, [storedLanguage]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
