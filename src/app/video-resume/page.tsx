import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, CheckSquare, Download, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VideoResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Video Resumes (Visumes)"
        subtitle="Make a lasting impression with a dynamic video resume."
      />

      <div className="mb-12 p-6 bg-primary/10 rounded-lg">
        <h3 className="text-2xl font-semibold text-primary mb-3">What is a Video Resume?</h3>
        <p className="text-foreground/80 leading-relaxed">
          A video resume, or 'visume', is a short video where you introduce yourself, showcase your personality, skills, and experience. It's a powerful tool to complement your traditional resume and stand out to potential employers.
        </p>
      </div>

      <SectionTitle
        title="Sample Video Resumes"
        subtitle="See how others are making an impact."
        className="mt-16"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative group">
              <Image 
                src={`https://placehold.co/600x338.png`} 
                alt={`Sample Video Resume ${index + 1}`} 
                layout="fill"
                objectFit="cover"
                data-ai-hint="video thumbnail professional"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-1">Visume Example {index + 1}</CardTitle>
              <CardDescription className="text-sm">Focus: Marketing Role</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <SectionTitle
        title="How to Create Your Visume"
        subtitle="Step-by-step guidance and resources."
        className="mt-16"
      />
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><Video className="mr-2 h-6 w-6" />Creation Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Plan your script and key talking points.</li>
              <li>Choose a professional background and good lighting.</li>
              <li>Dress appropriately for your target industry.</li>
              <li>Keep it concise (ideally 60-90 seconds).</li>
              <li>Showcase your personality and enthusiasm.</li>
              <li>Practice before recording.</li>
              <li>Use basic video editing tools if needed.</li>
            </ul>
            <Button variant="outline" asChild>
               <Link href="#" aria-label="View Detailed Guidelines (Opens in new tab)">
                View Full Guide (Coming Soon)
               </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><CheckSquare className="mr-2 h-6 w-6" />Downloadable Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ensure you cover all important aspects with our handy visume checklist.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#" aria-label="Download Visume Checklist">
                <Download className="mr-2 h-4 w-4" /> Download Checklist (PDF)
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-16">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Start Creating Your Visume
        </Button>
      </div>
    </div>
  );
}
