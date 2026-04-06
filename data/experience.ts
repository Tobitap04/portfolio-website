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
    id: "work-dspace",
    role: "Working Student in Research & Advanced Development",
    company: "dSPACE",
    year: "Oct 2025 – Present",
    type: "work",
    description:
      "Driving project-based research focusing on the latest AI advancements. Gaining hands-on experience with Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP) servers, Agentic AI, and advanced prompt engineering. Utilizing Python and Azure DevOps to seamlessly bridge the gap between experimental AI applications and robust software systems.",
  },
  {
    id: "edu-msc",
    role: "M.Sc. Computer Science",
    company: "Paderborn University",
    year: "Oct 2025 – Sept 2027",
    type: "education",
    description: "Focusing on IT Security and Machine Learning.",
  },
  {
    id: "work-tutor",
    role: "Student Assistant - Tutor",
    company: "Paderborn University",
    year: "Oct 2023 – Feb 2024",
    type: "work",
    description:
      "Led Data Modeling tutorial sessions for groups of ~20 students. Managed grading for assignments and exams. Successfully completed the higher education didactics program, earning the official 'T-Cert' tutoring certification.",
  },
  {
    id: "edu-bsc",
    role: "B.Sc. Computer Science",
    company: "Paderborn University",
    year: "Oct 2022 – Oct 2025",
    type: "education",
    description:
      "Graduated with a final grade of 1.2. Awarded the prestigious Deutschlandstipendium for outstanding academic performance.",
  },
  {
    id: "edu-abitur",
    role: "Abitur (A-Levels)",
    company: "Gymnasium Horn-Bad Meinberg",
    year: "Aug 2014 – Jun 2022",
    type: "education",
    description:
      "Graduated with a final grade of 2.2. Intensive advanced courses in Mathematics and Physics.",
  },
];
