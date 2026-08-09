import { buildingProject, cosmosExplorerProgress } from "../data/projects";
import Constellation from "./Constellation";
import OrbitRing from "./OrbitRing";

export default function CurrentlyBuilding() {
  const p = buildingProject;

  return (
    <section id="building" className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-4">Currently Building</p>

        <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface">
          {/* strongest expression of the astronomy motif on the site: denser constellation
              plus a slow orbit ring, both layered — everywhere else uses one or the other, sparingly */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top right, var(--color-cosmic) 0%, transparent 60%)" }}
          />
          <Constellation className="absolute -top-6 right-0 w-full max-w-xl h-auto opacity-90 pointer-events-none" />
          <OrbitRing className="hidden md:block absolute -left-10 -bottom-10 w-56 h-56 opacity-60 pointer-events-none" />

          <div className="relative p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-dim/50 bg-accent-soft px-3 py-1 text-xs font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                In Development
              </span>
            </div>

            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text mb-1">
              {p.name}
            </h2>
            <p className="text-text-muted font-mono text-sm mb-6">{p.tagline}</p>

            <p className="max-w-2xl text-text-muted leading-relaxed mb-8">
              {p.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="eyebrow mb-2 text-accent">Done</p>
                <ul className="text-sm text-text-muted space-y-1">
                  {cosmosExplorerProgress.done.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-text-faint" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-2 text-text">In Progress</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {cosmosExplorerProgress.inProgress}
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">Up Next</p>
                <ul className="text-sm text-text-muted space-y-1">
                  {cosmosExplorerProgress.upNext.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-text-faint" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-text-muted border border-border rounded px-2 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-text hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  View Repository ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
