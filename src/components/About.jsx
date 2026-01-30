const LINK_CLASS = "hover:text-neutral-900 dark:hover:text-neutral-100 underline"
const SKILL_TAG_CLASS =
  "px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300"

/**
 * About section: summary, experience, education, skills.
 */
export function About({ t, data }) {
  return (
    <section
      id="about"
      className="py-16 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id="about-heading"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6"
        >
          {t.about.heading}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          {data.summary}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
          {data.person.valueProposition}
        </p>

        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          {t.about.experience}
        </h3>
        <ul className="space-y-6 mb-10">
          {data.experience.map((job) => (
            <li key={job.id}>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {job.company}
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{job.period}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">{job.role}</p>
              <ul className="mt-2 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                {job.highlights.map((h, i) => (
                  <li key={`${job.id}-h-${i}`}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          {t.about.education}
        </h3>
        <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          {data.education.map((edu, i) => (
            <li key={`edu-${i}-${edu.school}`}>
              {edu.degree} · {edu.school}
            </li>
          ))}
        </ul>

        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          {t.about.skills}
        </h3>
        <div className="flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          {[...data.skills.core, ...data.skills.tools, ...data.skills.soft].map((s) => (
            <span key={s.name} className={SKILL_TAG_CLASS}>
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
