'use client'

import { createContext, useContext, useMemo, useCallback, useRef, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import enTranslations from '../../translations/en.json'
import trTranslations from '../../translations/tr.json'
import deTranslations from '../../translations/de.json'

type Language = 'en' | 'tr' | 'de'

type Translations = typeof enTranslations

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  locale: Language
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations = {
  en: enTranslations,
  tr: trTranslations,
  de: deTranslations,
}

export function TranslationProvider({ children, locale }: { children: ReactNode; locale: Language }) {
  const router = useRouter()
  const pathname = usePathname()
  const isNavigatingRef = useRef(false)
  const finalLocale = locale || 'en'

  const setLanguage = useCallback((lang: Language) => {
    if (lang === finalLocale || isNavigatingRef.current) return
    
    isNavigatingRef.current = true
    
    // Set cookie for middleware
    document.cookie = `locale=${lang}; path=/; max-age=31536000`
    
    // Extract path without locale from pathname (e.g., /en/products -> products)
    const pathWithoutLocale = pathname?.replace(new RegExp(`^/${finalLocale}/?`), '').replace(/^\/|\/$/g, '') || ''
    
    // Build new path with new locale
    const newPath = pathWithoutLocale ? `/${lang}/${pathWithoutLocale}` : `/${lang}`
    
    // Use replace to avoid adding to history
    router.replace(newPath)
    
    // Reset navigation flag after a short delay
    setTimeout(() => {
      isNavigatingRef.current = false
    }, 100)
  }, [finalLocale, pathname, router])

  const value = useMemo(() => ({
    language: finalLocale,
    setLanguage,
    t: translations[finalLocale] || translations.en,
    locale: finalLocale,
  }), [finalLocale, setLanguage])

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

