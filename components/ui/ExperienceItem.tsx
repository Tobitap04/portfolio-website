import type { ExperienceEntry } from "@/data/experience";

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
}

export function ExperienceItem({ entry, isLast = false }: ExperienceItemProps) {
  return (
    <div
      className={`grid grid-cols-3 gap-4 py-4 items-center ${
        !isLast ? "border-b border-border-subtle" : ""
      } hover:bg-surface/30 transition-colors duration-200 px-2 -mx-2 rounded-lg`}
    >
      <span className="text-text-primary font-medium">{entry.role}</span>
      <span className="text-text-secondary">{entry.company}</span>
      <span className="text-text-muted text-right font-mono text-sm">
        {entry.year}
      </span>
    </div>
  );
}
