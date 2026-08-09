export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PHP", "CodeIgniter"],
  },
  {
    label: "Database / ORM",
    items: ["Prisma"],
  },
  {
    label: "Tools & Practices",
    items: ["Git / GitHub", "Vercel", "Turborepo & pnpm workspaces", "AI-assisted development"],
  },
];
