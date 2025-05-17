import { professors } from "@/data/professors";
import { ProfessorProfileDisplay } from "@/components/faculty/ProfessorProfileDisplay";
import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ProfessorPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ProfessorPageProps): Promise<Metadata> {
  const professor = professors.find(p => p.id === params.id);
  if (!professor) {
    return {
      title: 'Professor Not Found',
      description: 'The requested professor profile could not be found.',
    };
  }
  return {
    title: `${professor.name} | Synergy Hub`,
    description: `Profile of ${professor.name}, ${professor.title}. ${professor.bio.substring(0, 160)}...`,
  };
}

export default function ProfessorPage({ params }: ProfessorPageProps) {
  const professor = professors.find((p) => p.id === params.id);

  if (!professor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Professor Not Found</h1>
        <p className="text-muted-foreground mb-6">The professor profile you are looking for does not exist.</p>
        <Button asChild variant="outline">
          <Link href="/faculty">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Faculty
          </Link>
        </Button>
      </div>
    );
  }

  return <ProfessorProfileDisplay professor={professor} />;
}

export async function generateStaticParams() {
  return professors.map((professor) => ({
    id: professor.id,
  }));
}
