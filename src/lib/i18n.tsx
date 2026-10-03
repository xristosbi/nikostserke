import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'el' | 'en';

/** A piece of copy in both site languages. */
export type Tr<T = string> = { el: T; en: T };

const STORAGE_KEY = 'site-lang';

function readStoredLang(): Lang {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === 'el' || v === 'en') return v;
  } catch {
    // storage blocked (private mode etc.) - fall back to Greek
  }
  return 'el';
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'el',
  setLang: () => {},
});

// Lives at the app root (above the router outlet), so the chosen language
// survives client-side navigation; localStorage keeps it across reloads too.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? 'Nikos Tserkezidis' : 'Νίκος Τσερκεζίδης';
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = useCallback(<T,>(tr: Tr<T>): T => tr[lang], [lang]);
  return { lang, setLang, t };
}
