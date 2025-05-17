import Image from "next/image";
import Link from "next/link";
import type { Professor } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SocialLinkIcon } from "@/components/shared/SocialLinkIcon";

interface ProfessorCardProps {
  professor: Professor;
}

export function ProfessorCard({ professor }: ProfessorCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center text-center p-6">
        <Image
          src={professor.imageUrl}
          alt={`Portrait of ${professor.name}`}
          width={128}
          height={128}
          className="rounded-full mb-4 border-4 border-primary/20"
          data-ai-hint={professor.dataAiHint}
        />
        <CardTitle className="text-xl">{professor.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{professor.title}</p>
      </CardHeader>
      <CardContent className="px-6 pb-4 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {professor.bio.substring(0, 150)}...
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4 p-6 pt-0">
        <div className="flex space-x-2">
          {professor.socialLinks.slice(0, 2).map((link) => ( // Show max 2 social links on card
            <SocialLinkIcon key={link.platform} link={link} />
          ))}
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/faculty/${professor.id}`}>
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
