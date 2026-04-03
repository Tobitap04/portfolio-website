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
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern, dark-mode portfolio built with Next.js, TypeScript, and Tailwind CSS. Features animated backgrounds, responsive design, and optimized performance.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/tobiastappe",
    liveUrl: "#",
    status: "completed",
    featured: true,
  },
  {
    id: "ai-chatbot",
    title: "AI Study Assistant",
    description:
      "An intelligent chatbot powered by LLMs that helps students organize study materials, generate flashcards, and quiz themselves on course content.",
    tags: ["Python", "LangChain", "React", "OpenAI API"],
    image: "/images/projects/ai-chatbot.jpg",
    githubUrl: "https://github.com/tobiastappe",
    status: "completed",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Flow",
    description:
      "A full-stack task management app with real-time collaboration, drag-and-drop kanban boards, and team workspace features.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    image: "/images/projects/task-manager.jpg",
    githubUrl: "https://github.com/tobiastappe",
    status: "completed",
    featured: true,
  },
  {
    id: "data-viz-dashboard",
    title: "Data Viz Dashboard",
    description:
      "Interactive data visualization dashboard for analyzing large datasets with customizable charts, filters, and export capabilities.",
    tags: ["D3.js", "TypeScript", "Python", "FastAPI"],
    image: "/images/projects/data-viz.jpg",
    githubUrl: "https://github.com/tobiastappe",
    status: "completed",
    featured: true,
  },
  {
    id: "mobile-fitness",
    title: "FitTrack Mobile",
    description:
      "A cross-platform fitness tracking app with workout logging, progress analytics, and personalized training recommendations.",
    tags: ["React Native", "TypeScript", "Firebase"],
    image: "/images/projects/fitness.jpg",
    status: "in-progress",
    featured: false,
  },
  {
    id: "blockchain-voting",
    title: "Decentralized Voting System",
    description:
      "A secure, transparent voting platform built on blockchain technology, ensuring tamper-proof elections and verifiable results.",
    tags: ["Solidity", "Ethereum", "Next.js", "Web3.js"],
    image: "/images/projects/blockchain.jpg",
    status: "planned",
    featured: false,
  },
];
