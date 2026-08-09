import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-20 sm:py-28 border-t border-border overflow-hidden"
    >
      {/* one quiet arc — restraint is the point here */}
      <svg
        className="absolute -top-16 -right-16 w-64 h-64 opacity-[0.12] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="var(--color-cosmic)" strokeWidth="1" fill="none" />
      </svg>

      <div className="mx-auto max-w-5xl relative">
        <p className="eyebrow mb-4">Experience</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-14 max-w-xl">
          Where I've worked.
        </h2>

        <ol className="relative">
          {/* the timeline spine */}
          <div
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border-strong"
            aria-hidden="true"
          />

          {experience.map((entry) => (
            <li key={`${entry.type}-${entry.organization}`} className="relative pl-9 sm:pl-12 pb-12 last:pb-0">
              {/* timeline node */}
              <span
                className="absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2 border-cosmic bg-bg"
                aria-hidden="true"
              >
                <span className="absolute inset-[3px] rounded-full bg-accent" />
              </span>

              <article className="group rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-cosmic-dim hover:shadow-[0_10px_28px_-10px_var(--color-cosmic-soft)]">
                {/* entry type is always shown as text, never color-only */}
                <p className="eyebrow mb-2">{entry.type}</p>

                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-lg text-text">
                          {entry.role}
                        </h3>
                        <p className="text-text-muted">
                          {entry.organization}
                          {entry.employmentType && (
                            <span className="text-text-muted"> · {entry.employmentType}</span>
                          )}
                        </p>
                      </div>

                      {entry.period && (
                        <div className="text-right shrink-0">
                          <p className="font-mono text-xs text-text-muted">{entry.period}</p>
                          {entry.location && (
                            <p className="font-mono text-xs text-text-muted mt-0.5">
                              {entry.location}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {entry.description && (
                      <p className="text-text-muted leading-relaxed text-[15px] mb-4">
                        {entry.description}
                      </p>
                    )}

                    {entry.highlights && (
                      <ul className="space-y-2.5 mb-5">
                        {entry.highlights.map((point) => (
                          <li key={point} className="flex gap-3 text-text-muted leading-relaxed text-[15px]">
                            <span
                              className="mt-2.5 w-1 h-1 rounded-full bg-accent-dim shrink-0"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {entry.technologies && (
                      <ul className="flex flex-wrap gap-2">
                        {entry.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="font-mono text-xs text-text-muted border border-border rounded-full px-2.5 py-1"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* supporting evidence, not the focus — modestly sized, never wider than the text column on desktop */}
                  {entry.image && (
                    <figure className="mt-5 md:mt-0 md:w-48 lg:w-56 shrink-0">
                      <img
                        src={entry.image}
                        alt={entry.imageAlt ?? ""}
                        loading="lazy"
                        className="w-full h-auto rounded-lg border border-border object-cover"
                      />
                      <figcaption className="mt-2 font-mono text-xs text-text-muted">
                        {entry.organization}
                      </figcaption>
                    </figure>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
