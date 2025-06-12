
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, FileText, Video, Mail, Linkedin, Search, Users, Lightbulb, Handshake, ClipboardEdit, HeartHandshake } from "lucide-react";

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
    title: "LinkedIn Profile",
    description: "Optimize your LinkedIn profile for professional success.",
    href: "/soft-skills-hub",
    icon: Linkedin,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-500"
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <Image
          src="/coverpage.jpg"
          alt="Team collaborating in a modern office environment"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="team collaboration office"
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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why EmpowerPath?" subtitle="Dedicated support for your career journey." className="mb-12" />
           <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              EmpowerPath Careers is dedicated to bridging the gap between education and employment for students, fresh graduates, and unemployed youth. We provide expertly curated resources, practical guides, and downloadable templates for resume building, video resume creation, cover letter writing, and LinkedIn profile optimization. Our focus is on equipping you with the essential tools and skills needed to confidently navigate the job market and achieve your career aspirations. All our core resources are free, ensuring accessible support for everyone on their pathway to success.
            </p>
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

      {/* How Social Business Works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Understanding Social Business"
            subtitle="How EmpowerPath Careers makes a difference."
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <HeartHandshake className="mr-3 h-7 w-7" />
                  How Social Business Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A social business is a model designed to address a social problem using business methods.
                  Unlike traditional businesses focused solely on profit maximization, a social business reinvests
                  all its profits back into the venture to expand its social impact, cover operational costs,
                  or fund other social projects. The primary goal is to achieve a specific social objective,
                  such as improving education, healthcare, or, in our case, enhancing youth employability.
                  EmpowerPath Careers operates on this principle, aiming to be self-sustaining while
                  prioritizing our mission to support young individuals in their career journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
