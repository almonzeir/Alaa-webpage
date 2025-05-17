import Link from "next/link";
import { Rocket, Instagram, Youtube } from "lucide-react"; // Assuming TikTok might be represented by a generic video icon or Youtube for placeholder

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:py-8">
        <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:gap-3 md:px-0">
          <Rocket className="h-7 w-7 text-primary" />
          <div>
            <p className="text-lg font-semibold text-primary">EmpowerPath Careers</p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Pathway to Success for Your Future.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
            {/* Using Youtube as a placeholder for TikTok, replace with a more fitting icon if available or an SVG */}
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
