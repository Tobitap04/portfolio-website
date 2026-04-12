export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: [
      "Large Language Models (LLM)",
      "Model Context Protocol (MCP)",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
    ],
  },
  {
    name: "Languages & Frameworks",
    skills: [
      "Python",
      "Java",
      "SQLite",
      "React / Next.js",
      "Bash",
      "Git",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Azure DevOps",
      "VS Code",
      "GitHub",
      "n8n",
      "CrewAI",
    ],
  },
  {
    name: "Computer Science",
    skills: [
      "IT Security",
      "Data Science",
      "Algorithms & Data Structures",
      "Software Modeling",
      "UI/UX",
    ],
  },
  {
    name: "Further Qualifications",
    skills: [
      "Photography",
      "Videography",
      "Graphic Design",
      "Driver's License (Class B)",
    ],
  },
];
