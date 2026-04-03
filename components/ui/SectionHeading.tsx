interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm text-text-secondary border border-border rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
