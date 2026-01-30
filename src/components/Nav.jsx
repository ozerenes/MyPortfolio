import { Sun, Moon } from "lucide-react"

const LOCALE_BUTTON_CLASS_ACTIVE =
  "px-2 py-1 text-xs font-medium rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
const LOCALE_BUTTON_CLASS_INACTIVE =
  "px-2 py-1 text-xs font-medium rounded text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
const THEME_BUTTON_CLASS =
  "p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"

/**
 * Main navigation: logo, nav links, locale switcher (TR/EN), theme toggle.
 */
export function Nav({ t, locale, setLocale, dark, toggleTheme, themeMounted, data }) {
  const themeTitle = dark ? t.aria.themeTitleDark : t.aria.themeTitleLight

  return (
    <nav
      className="border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
      aria-label={t.aria.nav}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#"
          className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
        >
          {data.person.name}
        </a>
        <div className="flex items-center gap-3">
          <ul className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <li>
              <a href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {t.nav.work}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {t.nav.contact}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-700">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={locale === "tr" ? LOCALE_BUTTON_CLASS_ACTIVE : LOCALE_BUTTON_CLASS_INACTIVE}
              aria-label="Türkçe"
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={locale === "en" ? LOCALE_BUTTON_CLASS_ACTIVE : LOCALE_BUTTON_CLASS_INACTIVE}
              aria-label="English"
            >
              EN
            </button>
            {themeMounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className={THEME_BUTTON_CLASS}
                aria-label={t.aria.theme}
                title={themeTitle}
              >
                {dark ? (
                  <Sun className="w-4 h-4" aria-hidden />
                ) : (
                  <Moon className="w-4 h-4" aria-hidden />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
