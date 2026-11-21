import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {LanguageCode, SiteTranslation, TRANSLATIONS} from './translations';

const STORAGE_KEY = 'hotel_crystal_n_lang';

function readStoredLanguage(): LanguageCode {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'gu' || saved === 'hi') {
      return saved;
    }
  } catch {
    // Ignore storage read restrictions in sandboxed environments
  }
  return 'en';
}

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (next: LanguageCode) => void;
  t: SiteTranslation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({children}: {children: ReactNode}) {
  const [lang, setLangState] = useState<LanguageCode>(() => readStoredLanguage());

  const setLang = useCallback(
    (next: LanguageCode) => {
      if (next === lang) return;
      window.dispatchEvent(new CustomEvent('crystal-page-crossfade'));
      window.setTimeout(() => {
        setLangState(next);
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // Ignore storage write restrictions
        }
      }, 120);
    },
    [lang],
  );

  useEffect(() => {
    const current = TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    document.title = current.meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', current.meta.description);
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: TRANSLATIONS[lang],
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
