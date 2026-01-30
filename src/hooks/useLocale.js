import { useState, useEffect } from "react"
import { STORAGE_KEYS, LOCALES, DEFAULT_LOCALE } from "../constants"

/**
 * Persisted locale (tr/en) with localStorage sync and document.lang update.
 * @returns {{ locale: string, setLocale: (lang: string) => void }}
 */
export function useLocale() {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE
    const stored = localStorage.getItem(STORAGE_KEYS.LANG)
    return stored === "en" ? "en" : DEFAULT_LOCALE
  })

  const setLocale = (lang) => {
    if (!LOCALES.includes(lang)) return
    setLocaleState(lang)
    localStorage.setItem(STORAGE_KEYS.LANG, lang)
    document.documentElement.lang = lang
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return { locale, setLocale }
}
