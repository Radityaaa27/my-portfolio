export type ProjectStatus = "building" | "featured";

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Only set when explicitly true — never inferred. */
  note?: string;
}

/**
 * Currently Building — the flagship, in-progress personal project.
 * Rendered in its own section, separate from completed/selected work.
 */
export const buildingProject: Project = {
  slug: "cosmos-explorer",
  name: "Cosmos Explorer",
  status: "building",
  tagline: "An educational astronomy web experience",
  description:
    "I've always been interested in astronomy, so I wanted to turn that interest into something people can actually learn from — not just another space-themed website. The focus is experience and scientific accuracy over feature count: the goal is for someone to leave having learned something real about the universe.",
  stack: ["TypeScript", "Turborepo", "pnpm workspaces"],
  githubUrl: "https://github.com/Radityaaa27/cosmos-explorer",
};

export const cosmosExplorerProgress = {
  done: ["Planning", "Foundation"],
  inProgress: "Core Experience — Homepage, Learn, Explore, Planet Detail, Comparison",
  upNext: ["NASA Integration", "Learning (lessons & quizzes)", "Polish & accessibility pass"],
};

export const selectedProjects: Project[] = [
  {
    slug: "seapedia",
    name: "Seapedia",
    status: "featured",
    tagline: "Marketplace-style web application",
    description:
      "A marketplace-style web application built during my COMPFEST Software Engineering Academy experience, conceptually similar to Shopee.",
    stack: ["React", "Node.js", "Express", "Prisma"],
    liveUrl: "https://seapedia-lemon.vercel.app/",
  },
  {
    slug: "resep-ai",
    name: "Resep-AI",
    status: "featured",
    tagline: "AI-powered recipe generator",
    description:
      "A personal side project exploring AI-powered web development: users enter ingredients they have on hand, and the app generates a recipe from that input.",
    stack: ["React 19", "Vite", "TypeScript", "shadcn/ui"],
    githubUrl: "https://github.com/Radityaaa27/Resep-AI",
    liveUrl: "https://resep-ai-gilt.vercel.app/",
  },
];
