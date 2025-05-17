import { teamMembers } from "@/data/teamMembers";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { SectionTitle } from "@/components/shared/SectionTitle";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Meet Our Dynamic Team"
        subtitle="The talented individuals driving innovation and collaboration at Synergy Hub."
      />
      {teamMembers.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No team members to display at this time.</p>
      )}
    </div>
  );
}
