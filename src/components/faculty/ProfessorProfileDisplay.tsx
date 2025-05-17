import Image from "next/image";
import type { Professor, Publication } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SocialLinkIcon } from "@/components/shared/SocialLinkIcon";
import Link from "next/link";
import { BookOpen, Lightbulb, Users, ExternalLink } from "lucide-react";

interface ProfessorProfileDisplayProps {
  professor: Professor;
}

function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <li className="mb-3 pb-3 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
      <h4 className="font-semibold text-base text-primary">{publication.title}</h4>
      {publication.journal && (
        <p className="text-sm text-muted-foreground italic">{publication.journal}{publication.year ? `, ${publication.year}` : ''}</p>
      )}
      {!publication.journal && publication.year && (
         <p className="text-sm text-muted-foreground italic">{publication.year}</p>
      )}
      {publication.link && publication.link !== "#" && (
        <Button variant="link" size="sm" asChild className="px-0 h-auto -ml-1 text-accent hover:text-accent/80">
          <Link href={publication.link} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      )}
    </li>
  );
}

export function ProfessorProfileDisplay({ professor }: ProfessorProfileDisplayProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-secondary/30 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={professor.imageUrl}
              alt={`Portrait of ${professor.name}`}
              width={160}
              height={160}
              className="rounded-full border-4 border-primary shadow-md"
              data-ai-hint={professor.dataAiHint}
              priority
            />
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{professor.name}</CardTitle>
              <p className="text-lg text-muted-foreground mt-1">{professor.title}</p>
              <div className="mt-4 flex justify-center md:justify-start space-x-2">
                {professor.socialLinks.map((link) => (
                  <SocialLinkIcon key={link.platform} link={link} />
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 flex items-center"><Users className="mr-2 h-5 w-5 text-primary" /> Biography</h3>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{professor.bio}</p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-primary" /> Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {professor.researchInterests.map((interest) => (
                <span key={interest} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center"><BookOpen className="mr-2 h-5 w-5 text-primary" /> Selected Publications</h3>
            {professor.publications.length > 0 ? (
              <ul className="space-y-2">
                {professor.publications.map((pub) => (
                  <PublicationItem key={pub.title} publication={pub} />
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No publications listed.</p>
            )}
          </section>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">Connect with {professor.name}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
