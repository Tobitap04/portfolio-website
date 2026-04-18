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
      "A custom LLM skill that turns lecture slides and notes into ready-to-review RemNote flashcards — built around scientific flashcard best practices and RemNote's exact card syntax.",
    longDescription: [
      "A custom LLM skill that turns lecture slides and notes into ready-to-review RemNote flashcards — built around spaced repetition best practices and RemNote's exact card syntax.",
      "Building it involved researching flashcard best practices extensively — minimum information principle, card atomicity, active recall — and baking those rules directly into the skill's instructions alongside RemNote's exact card syntax.",
      "Created using the Copilot CLI and Claude's skill creator skill. Saves me hours of manual card creation each week and produces cards that are consistent in format, depth, and exam relevance."
    ],
    tags: ["LLM", "Skill", "Copilot CLI"],
    image: "/images/projects/remnote-skill.webp",
    githubUrl: "https://github.com/Tobitap04/skills",
    linkText: "Check out the skill",
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
    tags: ["n8n", "Gemini API", "Raspberry Pi"],
    image: "/images/projects/n8n-workspace.webp",
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
    liveUrl: "https://t.me/AwesomeAutomationBot",
    linkText: "Try AutomatioBot yourself",
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
    tags: ["Python", "LLM", "Research"],
    image: "/images/projects/robustCausalEval.webp",
    githubUrl: "https://github.com/Tobitap04/robust-causal-eval",
    status: "completed",
    featured: true,
  },
  {
    id: "project-katharina-tappe",
    title: "Coaching Practice Website",
    description:
      "A fast, modern website showcasing the services of a new coaching practice — designed using Google Stitch and implemented with Antigravity.",
    longDescription: [
      "A new coaching practice offering learning support, resilience training, and creative workshops needed a clean, professional website to present its services and handle client inquiries.",
      "I built the site using an AI-native workflow. Google Stitch handled the prototyping and UI layouts, while my Antigravity coding agent took care of the actual implementation — taking the project all the way to a live Vercel deployment.",
      "The finished site features a parallax image gallery to give visitors a feel for the space, a live schedule synced directly with Google Calendar to keep upcoming workshops up to date without a complex backend, and a streamlined contact flow. Built with Next.js (App Router), TypeScript, and Tailwind CSS."
    ],
    tags: ["Antigravity", "Stitch", "Vercel"],
    image: "/images/projects/kts-website.webp",
    liveUrl: "https://www.katharina-tappe.de",
    linkText: "Explore the website",
    status: "completed",
    featured: true,
  },
];
