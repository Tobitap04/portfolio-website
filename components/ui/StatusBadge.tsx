interface StatusBadgeProps {
  text?: string;
}

export function StatusBadge({ text = "Available For Work" }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm text-text-primary border border-border rounded-full bg-surface/50 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      {text}
    </span>
  );
}
