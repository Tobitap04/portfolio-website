export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "FastAPI"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "Vercel", "PostgreSQL", "Firebase", "Figma"],
  },
  {
    name: "Concepts",
    skills: [
      "Full-Stack Development",
      "REST APIs",
      "CI/CD",
      "Agile / Scrum",
      "UI/UX Design",
      "Machine Learning",
    ],
  },
];
