import { selectedProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-4">Selected Projects</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-12 max-w-xl">
          A few things I've built.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
