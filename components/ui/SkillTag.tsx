interface SkillTagProps {
  name: string;
  highlighted?: boolean;
}

export function SkillTag({ name, highlighted = false }: SkillTagProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 text-sm font-mono rounded-full border transition-colors duration-200 ${
        highlighted
          ? "bg-accent/10 text-accent border-accent/30"
          : "bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary"
      }`}
    >
      {name}
    </span>
  );
}
