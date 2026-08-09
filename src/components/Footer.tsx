export default function Footer() {
  return (
    <footer className="relative px-6 py-8 border-t border-border overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-cosmic), transparent)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-text-muted">
        <p>© {new Date().getFullYear()} Girindra Raditya Rizki</p>
        <p>Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
