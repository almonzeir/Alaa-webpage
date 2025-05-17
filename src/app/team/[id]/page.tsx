import { teamMembers } from "@/data/teamMembers";
import { TeamMemberProfileDisplay } from "@/components/team/TeamMemberProfileDisplay";
import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TeamMemberPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const member = teamMembers.find(m => m.id === params.id);
  if (!member) {
    return {
      title: 'Team Member Not Found',
      description: 'The requested team member profile could not be found.',
    };
  }
  return {
    title: `${member.name} | Synergy Hub Team`,
    description: `Profile of ${member.name}, ${member.role} at Synergy Hub. ${member.bio.substring(0, 160)}...`,
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamMembers.find((m) => m.id === params.id);

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Team Member Not Found</h1>
        <p className="text-muted-foreground mb-6">The team member profile you are looking for does not exist.</p>
        <Button asChild variant="outline">
          <Link href="/team">
           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
          </Link>
        </Button>
      </div>
    );
  }

  return <TeamMemberProfileDisplay member={member} />;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}
