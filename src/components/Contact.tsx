// TODO: Replace the placeholder below with your real email before deploying.
const EMAIL = "EMAIL";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-text max-w-xl mb-10">
          Let's build something together.
        </h2>
          <div className="mt-14 flex items-center gap-10">
              <a
                href={`mailto:${EMAIL}`}
                className="font-display text-xl text-text underline decoration-accent-dim decoration-1 underline-offset-8 transition-colors hover:text-accent sm:text-2xl"
              >
                {EMAIL}
              </a>
          <div className="flex items-center gap-6 font-mono text-sm text-text-muted">
            <a
              href="https://github.com/Radityaaa27"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/girindra-raditya-rizki-978047355/"
              target="_blank"
              rel="noreferrer"
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
