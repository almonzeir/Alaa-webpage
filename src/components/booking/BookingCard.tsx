import Image from "next/image";
import type { Professor, TeamMember } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SoftSkillBadge } from "@/components/shared/SoftSkillBadge";
import { Badge } from "@/components/ui/badge";
import { Handshake } from "lucide-react";

interface BookingCardProps {
  person: Professor | TeamMember;
  onBook: () => void;
}

export function BookingCard({ person, onBook }: BookingCardProps) {
  const isProfessor = 'researchInterests' in person;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      {/* CardHeader removed as per request */}
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-xs text-muted-foreground mb-2 line-clamp-3 h-[45px]">
          {person.bio.substring(0, 90)}...
        </p>
        {!isProfessor && (person as TeamMember).softSkills.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold mb-1 text-primary">Key Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {(person as TeamMember).softSkills.slice(0, 3).map(skill => (
                <SoftSkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={onBook} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Handshake className="mr-2 h-4 w-4" /> Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
