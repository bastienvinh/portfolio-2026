"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, useCallback, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


const STORAGE_KEY = "portfolio-language";

function getStoredLanguage(): Language | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") {
    return stored;
  }
  return null;
}


interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract language from pathname
  const getLanguageFromPath = useCallback((): Language | null => {
    const match = pathname.match(/^\/(fr|en)(\/|$)/);
    if (match) return match[1] as Language;
    return null;
  }, [pathname]);

  // Determine initial language: URL > localStorage > default (fr)
  const getInitialLanguage = useCallback(() => {
    return getLanguageFromPath() ?? getStoredLanguage() ?? "fr";
  }, [getLanguageFromPath]);

  // Sync with localStorage changes from other tabs
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
    return getStoredLanguage() ?? getLanguageFromPath() ?? "fr";
  }, [getLanguageFromPath]);

  const getServerSnapshot = useCallback(() => "fr", []);

  const storedLanguage = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Sync internal state when stored language changes (e.g., from another tab)
  useEffect(() => {
    setLanguageState(storedLanguage);
  }, [storedLanguage]);

  // On mount, update URL to match localStorage language if different
  // useEffect(() => {
  //   const stored = getStoredLanguage();
  //   const urlLang = getLanguageFromPath();
  //   if (stored && urlLang !== stored) {
  //     const newPath = pathname.replace(/^\/(fr|en)/, `/${stored}`);
  //     router.replace(newPath + window.location.search + window.location.hash);
  //     setLanguageState(stored);
  //   }
  // }, []); // Only run on mount

  // Save to localStorage and update URL when language changes
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    // Update URL if needed
    const urlLang = getLanguageFromPath();
    if (urlLang !== lang) {
      const newPath = pathname.replace(/^\/(fr|en)/, `/${lang}`);
      router.replace(newPath + window.location.search + window.location.hash);
    }
  }, [getLanguageFromPath, pathname, router]);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem(STORAGE_KEY, next);
      // Update URL if needed
      const urlLang = getLanguageFromPath();
      if (urlLang !== next) {
        const newPath = pathname.replace(/^\/(fr|en)/, `/${next}`);
        router.replace(newPath + window.location.search + window.location.hash);
      }
      return next;
    });
  }, [getLanguageFromPath, pathname, router]);

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
