/**
 * Site footer: copyright and name.
 */
export function Footer({ data }) {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8 border-t border-neutral-200 dark:border-neutral-700 text-center text-sm text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900"
      role="contentinfo"
    >
      <div className="max-w-3xl mx-auto px-6">
        © {year} / {data.person.name}
      </div>
    </footer>
  )
}
