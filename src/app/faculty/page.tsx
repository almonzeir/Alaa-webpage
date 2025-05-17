import { professors } from "@/data/professors";
import { ProfessorCard } from "@/components/faculty/ProfessorCard";
import { SectionTitle } from "@/components/shared/SectionTitle";

export default function FacultyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Our Esteemed Faculty"
        subtitle="Meet the accomplished professors leading Synergy Hub's research and initiatives."
      />
      {professors.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {professors.map((prof) => (
            <ProfessorCard key={prof.id} professor={prof} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No faculty members to display at this time.</p>
      )}
    </div>
  );
}
