export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  year: string;
  type: "work" | "education";
  description?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "cs-degree",
    role: "B.Sc. Computer Science",
    company: "University",
    year: "2023–Present",
    type: "education",
    description: "Focus on software engineering, algorithms, and AI/ML.",
  },
  {
    id: "web-dev-intern",
    role: "Web Developer",
    company: "Tech Startup",
    year: "2024",
    type: "work",
    description:
      "Built responsive web applications with React and Next.js.",
  },
  {
    id: "freelance",
    role: "Freelance Developer",
    company: "Self-Employed",
    year: "2023–Present",
    type: "work",
    description:
      "Designed and developed websites for small businesses and individuals.",
  },
  {
    id: "tutor",
    role: "CS Tutor",
    company: "University",
    year: "2024",
    type: "work",
    description:
      "Tutored fellow students in programming fundamentals and data structures.",
  },
];
