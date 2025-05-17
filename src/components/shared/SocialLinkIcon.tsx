import type { SocialLink } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SocialLinkIconProps {
  link: SocialLink;
}

export function SocialLinkIcon({ link }: SocialLinkIconProps) {
  return (
    <Button variant="ghost" size="icon" asChild aria-label={link.platform}>
      <Link href={link.url} target="_blank" rel="noopener noreferrer">
        <link.IconComponent className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
      </Link>
    </Button>
  );
}
