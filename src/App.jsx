import { useTheme } from "./hooks/useTheme"
import { useLocale } from "./hooks/useLocale"
import { getData } from "./data"
import { translations } from "./translations"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Work } from "./components/Work"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

/**
 * Root layout: theme + locale, nav, main sections, footer.
 */
export default function App() {
  const { dark, toggle: toggleTheme, mounted: themeMounted } = useTheme()
  const { locale, setLocale } = useLocale()
  const t = translations[locale] ?? translations.tr
  const data = getData(locale)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Nav
        t={t}
        locale={locale}
        setLocale={setLocale}
        dark={dark}
        toggleTheme={toggleTheme}
        themeMounted={themeMounted}
        data={data}
      />
      <main>
        <Home t={t} dark={dark} data={data} />
        <About t={t} data={data} />
        <Work t={t} data={data} />
        <Contact t={t} data={data} />
      </main>
      <Footer data={data} />
    </div>
  )
}
