/**
 * Application-wide constants.
 * Centralizes storage keys and supported locales for maintainability.
 */

/** localStorage key for theme preference: "light" | "dark" | null (system) */
export const STORAGE_KEYS = {
  THEME: "portfolio-theme",
  LANG: "portfolio-lang",
}

/** Supported locale codes */
export const LOCALES = ["tr", "en"]

/** Default locale when none is stored */
export const DEFAULT_LOCALE = "tr"
