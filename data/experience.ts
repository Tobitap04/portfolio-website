export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  year: string;
  type: "work" | "education";
  description?: string | string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "work-1",
    role: "Working Student – Research & Pre-Development",
    company: "dSPACE",
    year: "Since Oct 2025",
    type: "work",
    description: [
      "Working in the Research & Pre-Development team for the aerospace and automotive industry.",
      "Built a web-based prototype for automated test case generation using multi-agent systems and specialized MCP integrations.",
      "Researching emerging technologies and presenting results to internal stakeholders.",
    ],
  },
  {
    id: "edu-1",
    role: "M.Sc. Computer Science",
    company: "Paderborn University",
    year: "Since Apr 2026",
    type: "education",
    description: [
      "Current grade: 1.4 (≈ 3.6 GPA equivalent). ",
      "Focus areas: Machine Learning and IT Security. ",
      "Scholarship recipient (Deutschlandstipendium).",
    ],
  },
  {
    id: "work-2",
    role: "Student Assistant – Tutor",
    company: "Paderborn University",
    year: "Oct 2023 – Feb 2024",
    type: "work",
    description: [
      "Led weekly tutorials in Software Modeling for groups of ~20 students. Graded assignments and exams. ",
      "Earned the T-Cert certification in didactics and instructional design.",
    ],
  },
  {
    id: "edu-2",
    role: "B.Sc. Computer Science",
    company: "Paderborn University",
    year: "Oct 2022 – Mar 2026",
    type: "education",
    description: [
      "Grade: 1.2 (≈ 3.8 GPA equivalent). ",
      "Focus areas: Foundations of Computer Science, Software Development, Data Science and IT Security.",
      "Earned the UPB for Future certification in interdisciplinary sustainability.",
      "Scholarship recipient (Deutschlandstipendium).",
    ],
  },
];
