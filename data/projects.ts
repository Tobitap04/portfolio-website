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
    id: "llm-robustness-framework",
    title: "LLM Robustness Framework",
    description:
      "A comprehensive framework evaluating the robustness of Large Language Models when answering causal questions. Developed as my Bachelor's thesis, it systematically analyzes different prompting strategies and assesses the stability and reliability of model responses under varying conditions.",
    tags: ["LLM", "Python", "Machine Learning", "Research"],
    image: "/images/projects/portfolio.jpg", // Placeholder
    githubUrl: "https://github.com/tobiastappe", // Add actual URL later
    status: "completed",
    featured: true,
  },
  {
    id: "coaching-website",
    title: "Katharina Tappe Coaching",
    description:
      "Designed and developed a professional portfolio and booking website for a learning therapist. Rapidly prototyped high-fidelity UI using Google's Stitch and implemented the full custom Next.js frontend via an iterative agentic coding loop with Claude, Gemini, and Google Antigravity.",
    tags: ["React", "Next.js", "Web Development", "UI/UX"],
    image: "/images/projects/portfolio.jpg", // Placeholder
    status: "completed",
    featured: true,
  },
  {
    id: "telegram-ai-assistant",
    title: "Telegram AI Assistant",
    description:
      "An automated workflow assistant built with n8n for Telegram. It enables voice message summarization, automatic generation of Anki flashcards from notes and PDFs, and uses OCR/Vision to parse photos of timetables directly into calendar events.",
    tags: ["n8n", "Automation", "API Integration", "AI", "Python"],
    image: "/images/projects/ai-chatbot.jpg", // Placeholder
    status: "completed",
    featured: true,
  },
];
