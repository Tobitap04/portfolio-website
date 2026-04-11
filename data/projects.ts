export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-remnote-skill",
    title: "RemNote Flashcard Skill",
    description:
      "An AI skill that generates complete, opinionated flashcard sets from lecture notes and PDF slides — tailored exactly to my learning style and RemNote best practices. Saves hours of manual card creation every week by producing high-quality, ready-to-review cards that are consistent in format and depth.",
    tags: ["Python", "LLMs", "AI Agents", "Automation", "Education"],
    image: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/Tobitap04/skills",
    status: "completed",
    featured: true,
  },
  {
    id: "project-n8n-telegram",
    title: "n8n Personal AI Automation Hub",
    description:
      "A Telegram-connected n8n workflow that powers a range of small, AI-driven automations I use daily: summarizing voice messages, converting images or handwritten notes into Anki flashcards, and turning a timetable photo into an ICS calendar file. All accessible directly from Telegram — no app switching needed.",
    tags: ["n8n", "Telegram", "AI", "Automation", "Workflows"],
    image: "/images/projects/ai-chatbot.jpg",
    status: "completed",
    featured: true,
  },
  {
    id: "project-katharina-tappe",
    title: "Katharina Tappe – Lerntherapie",
    description:
      "A professional website for my mum's learning therapy and tutoring practice. Built with Next.js and Tailwind CSS, it displays all courses and services she offers, synced directly with her Google Calendar so sessions are always up-to-date without a complex backend. Includes a multi-channel contact form optimized for easy booking across different platforms.",
    tags: ["Next.js", "Tailwind CSS", "Google Calendar", "TypeScript"],
    image: "/images/projects/portfolio.jpg",
    liveUrl: "https://www.katharina-tappe.de",
    status: "completed",
    featured: true,
  },
  {
    id: "project-robustcausaleval",
    title: "RobustCausalEval",
    description:
      "An evaluation framework for analyzing how reliably LLMs answer causal questions under various perturbations (typos, biased phrasing, irrelevant context). Developed as part of my Bachelor's thesis at Paderborn University. Key finding: even semantics-preserving perturbations cause significant instability in model outputs. By combining input preprocessing, few-shot prompting, and output format constraints, robustness improved by up to 60% over baseline across all metrics.",
    tags: ["Python", "LLMs", "NLP", "Research", "Evaluation"],
    image: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/Tobitap04/robust-causal-eval",
    status: "completed",
    featured: true,
  },
];
