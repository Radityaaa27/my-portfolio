import jhic2025 from "../assets/jhic-2025.jpg";

/** The kind of entry on the timeline. Rendered as a visible text label —
 * never conveyed by color alone. */
export type ExperienceType = "Professional" | "Competition" | "Organization";

export type EmploymentType = "Full-time" | "Part-time" | "Freelance" | "Internship" | "Remote";

export interface ExperienceEntry {
  role: string;
  organization: string;
  type: ExperienceType;
  /** Optional — only set once verified. Left undefined rather than guessed. */
  employmentType?: EmploymentType;
  period?: string;
  /** Optional — only set once verified. Left undefined rather than guessed. */
  location?: string;
  /** Short summary paragraph. Optional — omitted when there's nothing verified to say. */
  description?: string;
  /** Bullet points — responsibilities for professional roles, standout
   * results (e.g. a placement) for competitions. Rendered identically
   * regardless of entry type, so no entry reads as "less important". */
  highlights?: string[];
  /** Tech stack actually used, drawn only from verified highlights/description. */
  technologies?: string[];
  /** Supporting image path (from src/assets) — evidence, not the main content. */
  image?: string;
  /** Required whenever `image` is set — describes the photo for screen readers. */
  imageAlt?: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer",
    organization: "PT. Inosoft Trans Sistem",
    type: "Professional",
    period: "Aug 2025 — Mar 2026",
    // employmentType and location intentionally omitted — not yet confirmed.
    highlights: [
      "Developed an AI-powered web toolbox using React 19, TypeScript, and shadcn/ui.",
      "Led the UI redesign of the company website using React and Tailwind CSS 4.",
      "Contributed to a legacy CodeIgniter/PHP application by implementing a barcode generation feature.",
    ],
    technologies: ["React 19", "TypeScript", "shadcn/ui", "Tailwind CSS", "CodeIgniter", "PHP"],
  },
  {
    role: "UI/UX Designer",
    organization: "Jagoan Hosting Infra Competition (JHIC) 2025",
    type: "Competition",
    period: "August 2025",
    description:
      "Competed in JHIC 2025, a national competition organized by Jagoan Hosting Indonesia, serving as UI/UX Designer.",
    highlights: ["Placed Top 30 Nasional"],
    technologies: ["User Interface Design"],
    image: jhic2025,
    imageAlt:
      "Three JHIC 2025 competitors reviewing their project on a laptop on stage, with the Infra Competition event backdrop behind them.",
  },
];
