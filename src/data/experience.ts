export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer",
    company: "PT. Inosoft Trans Sistem",
    period: "Aug 2025 — Mar 2026",
    points: [
      "Developed an AI-powered web toolbox using React 19, TypeScript, and shadcn/ui.",
      "Led the UI redesign of the company website using React and Tailwind CSS 4.",
      "Contributed to a legacy CodeIgniter/PHP application by implementing a barcode generation feature.",
    ],
  },
];
