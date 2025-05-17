import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Users, Zap, Brain, Download, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  { name: "Communication", Icon: MessageSquare, description: "Master verbal, written, and non-verbal communication.", color: "text-blue-500", hint: "communication skill" },
  { name: "Teamwork", Icon: Users, description: "Collaborate effectively and contribute to team success.", color: "text-green-500", hint: "teamwork collaboration" },
  { name: "Problem Solving", Icon: Brain, description: "Develop critical thinking and find innovative solutions.", color: "text-purple-500", hint: "problem solving critical thinking" },
  { name: "Confidence", Icon: Award, description: "Build self-assurance and present yourself effectively.", color: "text-amber-500", hint: "confidence self-esteem" },
];

export default function SoftSkillsHubPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Soft Skills Hub"
        subtitle="Develop the essential skills for career success and personal branding."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {skills.map((skill) => (
          <Card key={skill.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <skill.Icon className={`h-12 w-12 ${skill.color} mx-auto mb-3`} />
              <CardTitle className={`text-xl ${skill.color}`}>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <Button variant="link" className={`px-0 ${skill.color}`} asChild>
                <Link href="#" aria-label={`Learn more about ${skill.name}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <SectionTitle
        title="Resources & Downloads"
        subtitle="Articles, videos, and guides to boost your soft skills."
        className="mt-16"
      />
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><Zap className="mr-2 h-6 w-6" />Personal Branding Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Download our guide on building a strong personal brand to make a memorable impression.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#" aria-label="Download Personal Branding Tips">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><Award className="mr-2 h-6 w-6" />Self-Assessment Quiz (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Take our optional self-assessment quiz to identify your strengths and areas for development in soft skills. (Feature coming soon)
            </p>
            <Button variant="outline" disabled>
              Start Quiz (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6 text-primary">Featured Articles/Videos</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image 
                src={`https://placehold.co/600x400.png`} 
                alt={`Featured content ${index + 1}`} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
                data-ai-hint={skills[index % skills.length].hint}
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg mb-2">Article/Video Title {index + 1} on {skills[index % skills.length].name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  A short summary of the article or video content will go here. Explore insights and practical tips.
                </p>
                <Button variant="link" className="px-0 mt-2 text-primary" asChild>
                  <Link href="#" aria-label={`Read more about Article/Video Title ${index + 1}`}>
                    Read More / Watch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
       <div className="text-center mt-16">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Explore All Soft Skill Resources
        </Button>
      </div>
    </div>
  );
}
