import OrbitRing from "./OrbitRing";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/contact";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
      <OrbitRing className="hidden lg:block absolute -right-6 top-24 w-72 h-72 pointer-events-none" />

      <div className="mx-auto max-w-5xl relative">
        <p className="eyebrow mb-6">Full-Stack Developer · Indonesia</p>

        <h1 className="font-display font-semibold text-text leading-[1.05] text-[2.75rem] sm:text-6xl md:text-7xl tracking-tight">
          Hey, I'm Radit.
        </h1>

        {/* the value proposition — should read in under 3 seconds */}
        <p className="mt-5 max-w-xl text-xl sm:text-2xl font-display text-text-muted leading-snug">
          I build modern web applications, backed by real frontend experience —
          and I'm currently exploring AI and data science.
        </p>

        <p className="mt-4 max-w-xl text-text-muted leading-relaxed">
          Currently building{" "}
          <a
            href="#building"
            className="text-text underline decoration-accent-dim decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent transition-colors"
          >
            Cosmos Explorer
          </a>
          , an educational astronomy experience inspired by my interest in space.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* primary CTA — solid, with a soft glow */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent text-bg px-5 py-3 text-sm font-semibold shadow-[0_0_24px_-4px_var(--color-accent-soft)] hover:shadow-[0_0_32px_-2px_var(--color-accent-soft)] hover:brightness-110 transition-all"
          >
            View Projects
          </a>

          {/* secondary CTA — outline/ghost, deliberately lower visual weight */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium text-text-muted hover:border-cosmic-dim hover:text-text transition-colors"
          >
            Contact
          </a>

          <div className="ml-1 flex items-center gap-1 text-text-muted">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Radit's GitHub profile in a new tab"
              className="w-10 h-10 flex items-center justify-center rounded-md hover:text-text hover:bg-surface-hover transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Radit's LinkedIn profile in a new tab"
              className="w-10 h-10 flex items-center justify-center rounded-md hover:text-text hover:bg-surface-hover transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email Radit"
              className="w-10 h-10 flex items-center justify-center rounded-md hover:text-text hover:bg-surface-hover transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3.5 6.5h17a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M3 7.5 12 14l9-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
