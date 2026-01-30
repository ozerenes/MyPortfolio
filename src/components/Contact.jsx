const LINK_CLASS = "hover:text-neutral-900 dark:hover:text-neutral-100 underline"

/**
 * Contact section: email, phone, LinkedIn, GitHub.
 */
export function Contact({ t, data }) {
  const { person } = data

  return (
    <section
      id="contact"
      className="py-16 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id="contact-heading"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6"
        >
          {t.contact.heading}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          <a href={`mailto:${person.email}`} className={LINK_CLASS}>
            {person.email}
          </a>
        </p>
        {person.phone && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            <a
              href={`tel:${person.phone.replace(/\s/g, "")}`}
              className={LINK_CLASS}
            >
              {person.phone}
            </a>
          </p>
        )}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            LinkedIn
          </a>
          {person.github && (
            <>
              {" · "}
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS}
              >
                GitHub
              </a>
            </>
          )}
        </p>
      </div>
    </section>
  )
}
