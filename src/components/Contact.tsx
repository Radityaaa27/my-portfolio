import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-text max-w-xl mb-10">
          Let's build something together.
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <a
            href={`mailto:${EMAIL}`}
            className="text-xl sm:text-2xl font-display text-text hover:text-accent transition-colors underline decoration-accent-dim decoration-1 underline-offset-8"
          >
            Email
          </a>

          <div className="flex items-center gap-6 font-mono text-sm text-text-muted">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Radit's GitHub profile in a new tab"
              className="hover:text-text transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Radit's LinkedIn profile in a new tab"
              className="hover:text-text transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
