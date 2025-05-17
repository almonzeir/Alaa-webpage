import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Edit3, Download, FileCheck2 } from "lucide-react";
import Link from "next/link";

export default function CoverLetterPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Cover Letter Crafting"
        subtitle="Write compelling cover letters that open doors."
      />
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><Edit3 className="mr-2 h-6 w-6" />Step-by-Step Writing Guide</CardTitle>
            <CardDescription>Learn how to structure and write a persuasive cover letter.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">Our guide covers:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
              <li>Understanding the purpose of a cover letter.</li>
              <li>Researching the company and role.</li>
              <li>Structuring your letter: Introduction, Body, Conclusion.</li>
              <li>Highlighting relevant skills and experiences.</li>
              <li>Tailoring your letter to each application.</li>
              <li>Common mistakes to avoid.</li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="#" aria-label="View Cover Letter Writing Guide (Opens in new tab)">
                Read Full Guide (Coming Soon)
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><Download className="mr-2 h-6 w-6" />Downloadable Templates</CardTitle>
            <CardDescription>Professionally designed templates to get you started.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Choose from a selection of cover letter templates suitable for various industries and roles. Easy to customize.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#" aria-label="Download Cover Letter Templates">
                <Download className="mr-2 h-4 w-4" /> Download Templates (ZIP)
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <SectionTitle
        title="Cover Letter Examples"
        subtitle="See effective cover letters in action."
        className="mt-16"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index} className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center"><FileCheck2 className="mr-2 h-5 w-5 text-primary" />Cover Letter Sample {index + 1}</CardTitle>
              <CardDescription>Role: Example Entry-Level Analyst</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This sample demonstrates how to effectively match qualifications to job requirements for an entry-level position.
              </p>
              <Button variant="link" className="px-0 text-primary" asChild>
                <Link href="#" aria-label={`View Cover Letter Sample ${index + 1}`}>
                  View Sample
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center mt-16">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Start Writing Your Cover Letter
        </Button>
      </div>
    </div>
  );
}
