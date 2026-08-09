import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 sm:py-28 border-t border-border overflow-hidden">
      {/* faint instrument-panel grid — the "mission control" register of the theme */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-cosmic) 1px, transparent 1px), linear-gradient(90deg, var(--color-cosmic) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl relative">
        <p className="eyebrow mb-4">Technical Skills</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-12 max-w-xl">
          What I work with.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="eyebrow mb-4 text-text">{group.label}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-text-muted text-[15px]">
                    {item}
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
