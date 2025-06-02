
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye, Briefcase } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: "Alaaldin", role: "Team Member", imageUrl: "/alaaldin-profile.jpg", dataAiHint: "professional portrait" },
  { name: "Albaraa", role: "Team Member", imageUrl: "/albaraa-profile.jpg", dataAiHint: "professional portrait" },
  { name: "Abdallah", role: "Team Member", imageUrl: "/abdallah-profile.jpg", dataAiHint: "professional portrait" },
  { name: "Siti Nur", role: "Team Member", imageUrl: "/siti-nur-profile.jpg", dataAiHint: "professional portrait" },
  { name: "Norshakirah", role: "Team Member", imageUrl: "/norshakirah-profile.jpg", dataAiHint: "professional portrait" },
  { name: "Wan Atikah", role: "Team Member", imageUrl: "/wan-atikah-profile.jpg", dataAiHint: "professional portrait" },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="About EmpowerPath Careers"
        subtitle="Pathway to Success for Your Future"
      />

      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center"><Briefcase className="mr-3 h-7 w-7"/>Our Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 leading-relaxed">
            EmpowerPath Careers is a social business project dedicated to supporting students, fresh graduates, and unemployed youth. We aim to bridge the gap between education and employment by providing essential tools and resources for career development. Our platform offers guidance on building strong resumes, creating impactful video resumes, writing compelling cover letters, and developing crucial soft skills. We believe that everyone deserves the opportunity to present their best self to potential employers and embark on a successful career journey.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Eye className="mr-3 h-7 w-7" />Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 leading-relaxed">
              To be the leading resource hub empowering young individuals with the skills and confidence needed to achieve their career aspirations and contribute meaningfully to society.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Target className="mr-3 h-7 w-7" />Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 leading-relaxed">
              To provide accessible, high-quality resources and guidance for resume building, video resume creation, cover letter writing, and soft skills development, fostering a generation of well-prepared and confident job seekers.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <SectionTitle
        title="Meet the Team"
        subtitle="The passionate individuals behind EmpowerPath Careers."
        className="mt-16"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <Image
                src={member.imageUrl}
                alt={`Portrait of ${member.name}`}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 border-2 border-primary/30 object-cover"
                data-ai-hint={member.dataAiHint}
              />
              <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

       <Card className="mt-16 shadow-lg bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center"><Users className="mr-3 h-7 w-7"/>Our Social Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 leading-relaxed">
            By equipping young people with vital career-building skills, EmpowerPath Careers aims to reduce youth unemployment, enhance employability, and foster economic empowerment. We are committed to making a positive social impact by helping individuals unlock their potential and navigate the job market successfully.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
