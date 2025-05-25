import Link from "next/link";
import { Rocket, Instagram, Youtube, Linkedin } from "lucide-react"; // Assuming TikTok might be represented by a generic video icon or Youtube for placeholder

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
          <Link href="https://instagram.com/empowerpathcareers" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://tiktok.com/@resuready" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
            {/* Using Youtube as a placeholder for TikTok, replace with a more fitting icon if available or an SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube h-6 w-6"><path d="M12.025 21.493c-.017.003-.033.003-.05.003-4.398 0-8.004-3.203-8.004-7.143 0-3.94 3.606-7.143 8.004-7.143.017 0 .033 0 .05.002 4.385.025 7.955 3.225 7.955 7.146 0 3.92-3.57 7.12-7.955 7.135Z"/><path d="M10.035 10.667a.5.5 0 0 0-.52.495v4.505a.5.5 0 0 0 .777.416l3.753-2.253a.5.5 0 0 0 0-.832l-3.753-2.253a.5.5 0 0 0-.257-.078Z"/></svg>
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
