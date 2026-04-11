export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: [
      "Large Language Models (LLM)",
      "Agentic AI",
      "Retrieval-Augmented Generation (RAG)",
      "Machine Learning",
      "Model Context Protocol (MCP)",
      "CrewAI",
    ],
  },
  {
    name: "Languages & Frameworks",
    skills: [
      "Python",
      "Java",
      "SQL",
      "Node.js",
      "React / Next.js",
      "Git",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Azure DevOps",
      "GitHub Copilot",
      "VS Code",
      "n8n",
      "GitHub",
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
];
