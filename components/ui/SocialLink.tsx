import type { SocialProfile } from "@/data/social";

interface SocialLinkProps {
  profile: SocialProfile;
  showDivider?: boolean;
}

export function SocialLink({ profile, showDivider = false }: SocialLinkProps) {
  const Icon = profile.icon;

  return (
    <div className="inline-flex items-center">
      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
        aria-label={profile.name}
      >
        <Icon size={20} />
      </a>
      {showDivider && (
        <span className="mx-2 h-4 w-px bg-border" aria-hidden="true" />
      )}
    </div>
  );
}
