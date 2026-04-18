export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string | string[];
  tags: string[];
  image: string;
  gallery?: GalleryImage[];
  githubUrl?: string;
  liveUrl?: string;
  linkText?: string;
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-remnote-skill",
    title: "RemNote Flashcard Skill",
    description:
      "An AI skill that generates complete, opinionated flashcard sets from lecture notes and PDF slides — tailored exactly to my learning style and RemNote best practices.",
    longDescription: [
      "An AI skill that generates complete, opinionated flashcard sets from lecture notes and PDF slides — tailored exactly to my learning style and RemNote best practices.",
      "It saves hours of manual card creation every week by producing high-quality, ready-to-review cards that are consistent in format and depth.",
      "The automation pipeline parses complex structural data, converts concepts into highly atomic questions, and interfaces seamlessly with the RemNote ecosystem."
    ],
    tags: ["Python", "LLMs", "AI Agents", "Automation", "Education"],
    image: "/images/projects/portfolio.jpg",
    gallery: [
      { url: "/images/projects/portfolio.jpg", caption: "Main dashboard mockup" },
      { url: "/images/projects/ai-chatbot.jpg", caption: "AI processing flow" }
    ],
    githubUrl: "https://github.com/Tobitap04/skills",
    status: "completed",
    featured: true,
  },
  {
    id: "project-n8n-telegram",
    title: "n8n AutomationBot",
    description:
      "A self-hosted n8n bot that turns Telegram messages into actions — summarizes voice notes, syncs shift plans to your calendar, and generates Anki decks from lecture PDFs.",
    longDescription: [
      "We all have those tasks that just take up far too much unnecessary time in our daily lives. In my own routine, three things especially stood out: manually typing work schedules into my calendar, creating flashcards from lecture slides, and getting through voice messages that could have been two sentences.",
      "So I built AutomationBot — an n8n workflow running on my Raspberry Pi at home, connected to Telegram via a secure HTTP tunnel. The idea is simple: you send it something, it figures out what to do.",
      "• Voice message → Gemini summarizes it, you get the key points back in seconds.",
      "• Photo of a shift plan → Gemini parses the schedule, spits out an ICS file you can drop straight into your calendar.",
      "• Lecture PDF → Gemini extracts the key concepts into JSON, a Python script packages them into a ready-to-import Anki deck.",
      "No UI, no manual steps. One message and it's done."
    ],
    tags: ["n8n", "Telegram", "Gemini API", "Raspberry Pi"],
    image: "/images/projects/n8n-automation-preview.webp",
    gallery: [
      {
        url: "/images/projects/n8n-start-message.webp",
        caption: "Bot's welcome screen in Telegram."
      },
      {
        url: "/images/projects/n8n-voice-message.webp",
        caption: "Voice message summary."
      },
      {
        url: "/images/projects/n8n-work-schedule.webp",
        caption: "Creates calendar file based on shift plan."
      },
      {
        url: "/images/projects/n8n-anki-flash-cards.webp",
        caption: "Anki flashcard generation."
      }
    ],
    liveUrl: "https://t.me/TobitasTelegramBot",
    linkText: "Check out the AutomatioBot for yourself",
    status: "completed",
    featured: true,
  },
  {
    id: "project-katharina-tappe",
    title: "Katharina Tappe – Lerntherapie",
    description:
      "A professional website for my mum's learning therapy and tutoring practice.",
    longDescription: [
      "A professional website for my mum's learning therapy and tutoring practice, built with Next.js and Tailwind CSS.",
      "It displays all courses and services she offers, synced directly with her Google Calendar so sessions are always up-to-date — without a complex backend.",
      "Includes a multi-channel contact form optimized for easy booking across different platforms.",
    ],
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
      "An evaluation framework for analyzing how reliably LLMs answer causal questions under various perturbations.",
    longDescription: [
      "An evaluation framework for analyzing how reliably LLMs answer causal questions under various perturbations — including typos, biased phrasing, and irrelevant context.",
      "Developed as part of my Bachelor's thesis at Paderborn University.",
      "Key finding: even semantics-preserving perturbations cause significant instability in model outputs. By combining input preprocessing, few-shot prompting, and output format constraints, robustness improved by up to 60% over baseline across all metrics.",
    ],
    tags: ["Python", "LLMs", "NLP", "Research", "Evaluation"],
    image: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/Tobitap04/robust-causal-eval",
    status: "completed",
    featured: true,
  },
];
