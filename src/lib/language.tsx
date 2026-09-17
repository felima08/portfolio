'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pt' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  // Recupera o idioma salvo (se houver) assim que monta no navegador.
  // Precisa ficar num efeito (e não no useState inicial) porque localStorage
  // não existe durante o SSR — ler direto no render quebraria a build.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      // eslint-disable-next-line react-hooks/set-state-in-effect -- leitura única de preferência persistida, não é sincronização contínua
      if (stored === 'pt' || stored === 'en') setLangState(stored)
    } catch {
      // localStorage indisponível — mantém o padrão 'pt'
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignora se não conseguir persistir
    }
  }

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt')

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage precisa ser usado dentro de um <LanguageProvider>')
  }
  return ctx
}
