import Image from "next/image";
import type { TeamMember } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ProfileDocumentLink } from "@/components/shared/ProfileDocumentLink";
import { SoftSkillBadge } from "@/components/shared/SoftSkillBadge";
import { SocialLinkIcon } from "@/components/shared/SocialLinkIcon";
import Link from "next/link";
import { UserCircle, Briefcase, Sparkles, Video, FileText, Mail } from "lucide-react";

interface TeamMemberProfileDisplayProps {
  member: TeamMember;
}

export function TeamMemberProfileDisplay({ member }: TeamMemberProfileDisplayProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-secondary/30 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={member.imageUrl}
              alt={`Portrait of ${member.name}`}
              width={160}
              height={160}
              className="rounded-full border-4 border-primary shadow-md"
              data-ai-hint={member.dataAiHint}
              priority
            />
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{member.name}</CardTitle>
              <p className="text-lg text-muted-foreground mt-1">{member.role}</p>
              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="mt-4 flex justify-center md:justify-start space-x-2">
                  {member.socialLinks.map((link) => (
                    <SocialLinkIcon key={link.platform} link={link} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 flex items-center"><UserCircle className="mr-2 h-5 w-5 text-primary" /> About {member.name}</h3>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{member.bio}</p>
          </section>

          <Separator className="my-8" />

          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center"><Briefcase className="mr-2 h-5 w-5 text-primary" /> Professional Assets</h3>
              <div className="space-y-3">
                <ProfileDocumentLink href={member.videoResumeUrl} label="Video Resume" IconComponent={Video} />
                <ProfileDocumentLink href={member.resumeUrl} label="Standard Resume" IconComponent={FileText} />
                <ProfileDocumentLink href={member.coverLetterUrl} label="Cover Letter" IconComponent={Mail} />
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center"><Sparkles className="mr-2 h-5 w-5 text-primary" /> Soft Skills</h3>
              {member.softSkills.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {member.softSkills.map((skill) => (
                    <SoftSkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No soft skills listed.</p>
              )}
            </section>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={`/booking?contact=${member.id}`}>Connect with {member.name}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
