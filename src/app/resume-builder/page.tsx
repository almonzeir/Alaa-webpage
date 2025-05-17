import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, FileText, Eye } from "lucide-react";
import Link from "next/link";

export default function ResumeBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Resume Builder"
        subtitle="Craft a professional resume that stands out."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><FileText className="mr-2 h-6 w-6" />Resume Building Guide</CardTitle>
            <CardDescription>Our comprehensive guide to writing an effective resume.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn the essentials of resume writing, from choosing the right format to tailoring your content for specific jobs.
            </p>
            <Button variant="outline" asChild>
              <Link href="#" aria-label="View Resume Building Guide (Opens in new tab)">
                <Eye className="mr-2 h-4 w-4" /> View Guide (Coming Soon)
              </Link>
            </Button>
             <Button className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#" aria-label="Download Resume Building Guide">
                <Download className="mr-2 h-4 w-4" /> Download Guide (PDF)
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary"><Download className="mr-2 h-6 w-6" />Downloadable Templates</CardTitle>
            <CardDescription>Get started quickly with our professional resume templates.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Choose from a variety of modern and effective resume templates designed to impress employers.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#" aria-label="Download Resume Templates">
                <Download className="mr-2 h-4 w-4" /> Download Templates (ZIP)
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <SectionTitle
        title="Resume Samples"
        subtitle="Get inspired by successful resume examples."
        className="mt-16"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Sample Resume {index + 1}</CardTitle>
              <CardDescription>Industry: Example Tech/Business</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                A brief description of what makes this sample resume effective for its target role.
              </p>
              <Button variant="link" className="px-0 text-primary" asChild>
                <Link href="#" aria-label={`View Sample Resume ${index + 1}`}>
                  View Sample <Eye className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center mt-12">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Explore All Resume Resources
        </Button>
      </div>
    </div>
  );
}
