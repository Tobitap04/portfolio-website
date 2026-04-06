import { socialProfiles } from "@/data/social";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-text-muted text-sm">
          <a href="mailto:ttappe@gmx.net" className="hover:text-text-primary transition-colors">ttappe@gmx.net</a>
          <a href="tel:017676650275" className="hover:text-text-primary transition-colors">+49 176 76650275</a>
        </div>

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
