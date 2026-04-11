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
    id: "work-1",
    role: "Working Student – Research & Pre-Development",
    company: "dSPACE",
    year: "Oct 2025 – Present",
    type: "work",
    description:
      "Working in the Research & Pre-Development team on AI-driven tooling for the aerospace and automotive industry. Building a web-based prototype that generates test cases for AutomationDesk from natural language requirements — powered by a multi-agent system (CrewAI), RAG over technical documentation, and MCP servers. Conducting technology research and presenting results to internal stakeholders in an agile environment using Azure DevOps.",
  },
  {
    id: "edu-1",
    role: "M.Sc. Computer Science",
    company: "Paderborn University",
    year: "Oct 2025 – Present",
    type: "education",
    description:
      "Focus on Machine Learning and IT Security. Current grade: 1.4 (≈ 3.6 GPA equivalent). Scholarship recipient (Deutschlandstipendium).",
  },
  {
    id: "work-2",
    role: "Student Assistant – Tutor",
    company: "Paderborn University",
    year: "Oct 2023 – Feb 2024",
    type: "work",
    description:
      "Led weekly tutorials in Software Modeling for groups of ~20 students. Graded assignments and exams. Completed the university's teaching qualification program, earning the T-Cert certification in didactics and instructional design.",
  },
  {
    id: "edu-2",
    role: "B.Sc. Computer Science",
    company: "Paderborn University",
    year: "Oct 2022 – Oct 2025",
    type: "education",
    description:
      "Grade: 1.2 (≈ 3.8 GPA equivalent). Focus areas: Software Development, Data Science, IT Security, and Machine Learning.",
  },
];
