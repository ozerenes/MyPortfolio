import { useState, useEffect } from "react"
import { STORAGE_KEYS } from "../constants"

/**
 * Persisted theme (light/dark) with system preference fallback.
 * @returns {{ dark: boolean, toggle: () => void, mounted: boolean }}
 */
export function useTheme() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME)
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDark(stored === "dark" ? true : stored === "light" ? false : systemDark)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem(STORAGE_KEYS.THEME, dark ? "dark" : "light")
  }, [dark, mounted])

  const toggle = () => setDark((d) => !d)
  return { dark, toggle, mounted }
}
