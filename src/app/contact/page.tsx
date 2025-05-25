import { SectionTitle } from "@/components/shared/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react"; // Assuming TikTok is represented by Youtube
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Get in Touch"
        subtitle="We'd love to hear from you! Reach out with any questions or inquiries."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Information Section */}
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link href="mailto:info@empowerpath.careers" className="text-muted-foreground hover:text-primary">
                  info@empowerpath.careers
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold">Phone (Optional)</h3>
                <p className="text-muted-foreground">(123) 456-7890 (Placeholder)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold">Our University (Optional)</h3>
                <p className="text-muted-foreground">123 University Ave, City, State (Placeholder)</p>
                {/* Optional Google Maps Embed Placeholder */}
                {/* <div className="mt-2 h-48 bg-muted rounded-md flex items-center justify-center">Google Map Placeholder</div> */}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://instagram.com/empowerpathcareers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                  <Instagram className="h-7 w-7" />
                </Link>
                <Link href="https://tiktok.com/@resuready" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="TikTok">
                  {/* Using Youtube as a placeholder, replace with a proper TikTok icon SVG if available */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M12.025 21.493c-.017.003-.033.003-.05.003-4.398 0-8.004-3.203-8.004-7.143 0-3.94 3.606-7.143 8.004-7.143.017 0 .033 0 .05.002 4.385.025 7.955 3.225 7.955 7.146 0 3.92-3.57 7.12-7.955 7.135Z"/><path d="M10.035 10.667a.5.5 0 0 0-.52.495v4.505a.5.5 0 0 0 .777.416l3.753-2.253a.5.5 0 0 0 0-.832l-3.753-2.253a.5.5 0 0 0-.257-.078Z"/></svg>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
