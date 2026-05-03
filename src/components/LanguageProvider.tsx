"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  type LanguageCode,
  resolveLanguage,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: LanguageCode;
  isReady: boolean;
  supportedLanguages: LanguageCode[];
  defaultLanguage: LanguageCode;
  setLanguage: (nextLanguage: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [manualLanguage, setManualLanguage] = useState<LanguageCode | null>(null);
  const [savedLanguage, setSavedLanguage] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const cached = window.localStorage.getItem("lang");
    const resolved = resolveLanguage({
      savedLanguage: cached,
      browserLanguage: window.navigator.language,
    });

    queueMicrotask(() => {
      setSavedLanguage(resolved);
      setIsReady(true);
    });
  }, []);

  const language = resolveLanguage({
    manualLanguage,
    savedLanguage,
  });

  const setLanguage = useCallback((nextLanguage: string) => {
    const resolved = resolveLanguage({
      manualLanguage: nextLanguage,
      savedLanguage,
    });

    setManualLanguage(resolved);
    setSavedLanguage(resolved);
    window.localStorage.setItem("lang", resolved);
  }, [savedLanguage]);

  const value = useMemo(
    () => ({
      language,
      isReady,
      supportedLanguages: SUPPORTED_LANGUAGES,
      defaultLanguage: DEFAULT_LANGUAGE,
      setLanguage,
    }),
    [isReady, language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}


