import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProfessorCard } from "@/components/faculty/ProfessorCard";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { professors } from "@/data/professors";
import { teamMembers } from "@/data/teamMembers";
import { ArrowRight, Users, Brain, Handshake } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary">
            Welcome to Synergy Hub
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            A dynamic platform dedicated to showcasing the collaborative work of Prof. Dr. Yunis, Prof. Dr. Suraya, and their innovative team. Discover our research, expertise, and connect with us to explore new frontiers.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">
                Connect With Us <Handshake className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/team">
                Meet the Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Optional */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="About Synergy Hub" subtitle="Driving innovation through collaboration" />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Spirit</h3>
              <p className="text-muted-foreground text-sm">
                We believe in the power of teamwork and diverse perspectives to solve complex challenges.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovative Research</h3>
              <p className="text-muted-foreground text-sm">
                Our work spans across social business, collaborative studies, and cutting-edge technologies.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-muted-foreground text-sm">
                We strive to make a tangible impact by connecting our research with real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Faculty Section */}
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Meet Our Faculty" subtitle="Guiding research and innovation" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professors.map((prof) => (
              <ProfessorCard key={prof.id} professor={prof} />
            ))}
          </div>
           <div className="text-center mt-10">
            <Button variant="link" asChild>
              <Link href="/faculty">
                View All Faculty <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Dedicated Team" subtitle="The driving force behind our projects" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member) => ( // Show first 3 team members
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/team">
                Meet the Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate or Learn More?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            We are always open to new ideas, partnerships, and discussions. Reach out to connect with our team or faculty members.
          </p>
          <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <Link href="/booking">
              Get in Touch <Handshake className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
