import { socialProfiles } from "@/data/social";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="mailto:ttappe@gmx.net"
          className="text-text-muted text-sm hover:text-text-primary transition-colors"
        >
          ttappe@gmx.net
        </a>

        <div className="flex items-center">
          {socialProfiles.map((profile, index) => (
            <SocialLink
              key={profile.name}
              profile={profile}
              showDivider={index < socialProfiles.length - 1}
            />
          ))}
        </div>

        <span className="text-text-muted text-sm">
          © {new Date().getFullYear()} Tobias Tappe
        </span>
      </div>
    </footer>
  );
}
