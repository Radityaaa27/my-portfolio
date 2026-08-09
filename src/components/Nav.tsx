import { useEffect, useState } from "react";

const LINKS = [
  { href: "#building", label: "Building" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-text tracking-tight"
          aria-label="Radit — back to top"
        >
          radit<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px] text-text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-text transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Radityaaa27"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-text transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-md border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-text p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-1 font-mono text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/Radityaaa27"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block py-2.5 text-text-muted hover:text-text transition-colors"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
