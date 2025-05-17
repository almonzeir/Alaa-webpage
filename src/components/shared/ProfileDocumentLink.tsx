import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileDocumentLinkProps {
  href?: string;
  label: string;
  IconComponent: LucideIcon;
}

export function ProfileDocumentLink({ href, label, IconComponent }: ProfileDocumentLinkProps) {
  if (!href) {
    return (
       <div className="flex items-center space-x-2 p-2 rounded-md bg-muted/50">
        <IconComponent className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{label} (Not available)</span>
      </div>
    );
  }

  return (
    <Button variant="outline" asChild className="w-full justify-start">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <IconComponent className="mr-2 h-5 w-5 text-primary" />
        {label}
      </Link>
    </Button>
  );
}
