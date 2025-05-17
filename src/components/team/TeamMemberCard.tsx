import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center text-center p-6">
         <Image
          src={member.imageUrl}
          alt={`Portrait of ${member.name}`}
          width={100}
          height={100}
          className="rounded-full mb-4 border-2 border-secondary"
          data-ai-hint={member.dataAiHint}
        />
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <p className="text-xs text-muted-foreground">{member.role}</p>
      </CardHeader>
      <CardContent className="px-6 pb-4 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {member.bio.substring(0,120)}...
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/team/${member.id}`}>
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
