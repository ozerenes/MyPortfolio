const LINK_CLASS = "text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline"

/**
 * Work section: project list with tags and links (demo/GitHub).
 */
export function Work({ t, data }) {
  return (
    <section
      id="work"
      className="py-16 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
      aria-labelledby="work-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id="work-heading"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-8"
        >
          {t.work.heading}
        </h2>
        <ul className="space-y-10">
          {data.projects.map((project) => (
            <li key={project.id}>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-500 dark:text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    {t.work.site}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    {t.work.github}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
