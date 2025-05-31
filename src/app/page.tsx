
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, FileText, Video, Mail, Sparkles, Search, Users, Lightbulb, Handshake, ClipboardEdit } from "lucide-react";

const services = [
  {
    title: "Resume Builder",
    description: "Craft compelling resumes with our expert tips and templates.",
    href: "/resume-builder",
    icon: FileText,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "Video Resume (Visume)",
    description: "Create impactful video resumes that showcase your personality.",
    href: "/video-resume",
    icon: Video,
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-600",
    borderColor: "border-teal-500/20",
    iconColor: "text-teal-500"
  },
  {
    title: "Cover Letter Writing",
    description: "Learn to write persuasive cover letters that get noticed.",
    href: "/cover-letter",
    icon: Mail,
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "Soft Skills Hub",
    description: "Develop essential soft skills for career success and personal growth.",
    href: "/soft-skills-hub",
    icon: Sparkles,
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-500"
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <Image
          src="/coverpage.jpg" // Changed placeholder
          alt="Team collaborating in a modern office environment" // Updated alt text
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="team collaboration office" // Updated data-ai-hint
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-1"></div> {/* Overlay for text readability */}
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground">
            EmpowerPath Careers
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            Pathway to Success for Your Future
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Link href="/resume-builder">
                Start Your Career Journey Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfJ4_gp_awH5Gh2ZM256el7613Z2Rs7LUlE8jTtuwN7ayujVw/viewform" target="_blank" rel="noopener noreferrer">
                Register Now <ClipboardEdit className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-1xl md:text-1xl lg:text-2xl font-bold mb-6 text-primary-foreground">
          Tailored for students, fresh graduates, and unemployed youth. Get free templates, guides, and checklists for resumes, cover letters, and more.
          </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Services"
            subtitle="Everything you need to kickstart your career with confidence."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className={`shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 ${service.borderColor} flex flex-col`}>
                <CardHeader className="items-center text-center p-6">
                  <div className={`p-4 rounded-full ${service.bgColor} mb-4`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  <CardTitle className={`text-xl ${service.textColor}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-4 text-center flex-grow">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="outline" className={`w-full border-${service.textColor.split('-')[1]}-500/50 text-${service.textColor.split('-')[1]}-600 hover:bg-${service.bgColor} hover:text-${service.textColor.split('-')[1]}-700`}>
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why EmpowerPath?" subtitle="Dedicated support for your career journey." className="mb-12" />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Access curated resources and expert tips for every step.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Youth Focused</h3>
              <p className="text-muted-foreground text-sm">
                Tailored for students, fresh graduates, and unemployed youth.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <Handshake className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Resources</h3>
              <p className="text-muted-foreground text-sm">
                All our templates, guides, and checklists are free to download.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Future?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Explore our resources and take the first step towards a successful career. We're here to help you shine!
          </p>
          <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary/90" asChild>
            <Link href="/contact">
              Get in Touch <Search className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
