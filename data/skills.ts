export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: [
      "LLM",
      "MCP",
      "RAG",
      "Agentic AI",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
  },
  {
    name: "Languages",
    skills: [
      "Python",
      "Java",
      "SQLite",
      "Bash",
      "R / RStudio",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Azure DevOps",
      "VS Code",
      "Git",
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
      "LaTeX",
    ],
  },
];
