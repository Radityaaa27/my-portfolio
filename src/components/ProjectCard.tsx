import type { Project } from "../data/projects";

const STATUS_LABEL: Record<Project["status"], string> = {
  featured: "Featured",
  building: "In Development",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 h-full overflow-hidden transition-all duration-300 hover:border-cosmic-dim hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_var(--color-cosmic-soft)]">
      {/* faint celestial corner accent — a single quiet point of light, not decoration for its own sake */}
      <span
        className="absolute top-5 right-5 w-1 h-1 rounded-full bg-cosmic opacity-40 group-hover:opacity-90 transition-opacity"
        aria-hidden="true"
      />

      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-display font-semibold text-xl text-text">
            {project.name}
          </h3>
          <span className="eyebrow whitespace-nowrap pt-1">{STATUS_LABEL[project.status]}</span>
        </div>

        <p className="text-sm text-text-muted font-mono mb-4">{project.tagline}</p>

        <p className="text-text-muted leading-relaxed text-[15px] mb-6">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-xs text-text-muted border border-border rounded px-2 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5 mt-6 pt-6 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
            className="text-sm font-medium text-text-muted hover:text-text transition-colors"
          >
            Code ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} live demo`}
            className="text-sm font-medium text-text hover:text-accent transition-colors"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
