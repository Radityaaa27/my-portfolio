import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20 sm:py-28 border-t border-border overflow-hidden">
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
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-12 max-w-xl">
          Where I've worked.
        </h2>

        <div className="space-y-10">
          {experience.map((entry) => (
            <div
              key={entry.company}
              className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 pb-10 border-b border-border last:border-b-0 last:pb-0"
            >
              <div>
                <h3 className="font-display font-semibold text-lg text-text">
                  {entry.role}
                </h3>
                <p className="text-text-muted">{entry.company}</p>
                <p className="font-mono text-xs text-text-muted mt-2">{entry.period}</p>
              </div>

              <ul className="space-y-3">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-text-muted leading-relaxed">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-accent-dim shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
