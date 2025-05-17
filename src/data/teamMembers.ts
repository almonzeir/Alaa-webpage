import type { TeamMember } from "@/lib/types";
import { MessageCircle, Users, Lightbulb, Brain, TrendingUp, Star, Linkedin, Github, Twitter, Code, Palette, BarChart } from "lucide-react";

export const teamMembers: TeamMember[] = [
  {
    id: "alaaldin",
    name: "Alaaldin",
    role: "Team Member",
    imageUrl: "https://firebasestudio.googleapis.com/v0/b/studiopuppet-51028.appspot.com/o/IMAGE_UPLOAD%2Fsfm1a3g0k3a0r1i1u2f?alt=media&token=232d87b5-307b-419b-9307-836146167164",
    dataAiHint: "professional man suit",
    bio: "Alaaldin is a dedicated member of the team, contributing to various projects with enthusiasm and skill. He is always eager to learn and collaborate effectively with colleagues.",
    videoResumeUrl: "#",
    resumeUrl: "#",
    coverLetterUrl: "#",
    softSkills: [
      { name: "Collaboration", dateRecorded: "2024-05-10", IconComponent: Users },
      { name: "Problem Solving", dateRecorded: "2024-04-15", IconComponent: Lightbulb },
      { name: "Adaptability", dateRecorded: "2024-03-20", IconComponent: TrendingUp },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "#", IconComponent: Linkedin },
    ],
  },
  {
    id: "albraa",
    name: "Albraa",
    role: "Team Contributor",
    imageUrl: "https://firebasestudio.googleapis.com/v0/b/studiopuppet-51028.appspot.com/o/IMAGE_UPLOAD%2Fsfm1a3g0k3a0r1i1u2f?alt=media&token=232d87b5-307b-419b-9307-836146167164",
    dataAiHint: "professional man suit",
    bio: "Albraa brings a unique perspective and valuable skills to the team. He is known for his insightful contributions and commitment to achieving project goals.",
    videoResumeUrl: "#",
    resumeUrl: "#",
    coverLetterUrl: "#",
    softSkills: [
      { name: "Critical Thinking", dateRecorded: "2024-05-01", IconComponent: Brain },
      { name: "Communication", dateRecorded: "2024-04-20", IconComponent: MessageCircle },
      { name: "Technical Skills", dateRecorded: "2024-03-25", IconComponent: Code },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "#", IconComponent: Linkedin },
      { platform: "GitHub", url: "#", IconComponent: Github },
    ],
  },
  {
    id: "abdalla",
    name: "Abdalla",
    role: "Project Associate",
    imageUrl: "https://firebasestudio.googleapis.com/v0/b/studiopuppet-51028.appspot.com/o/IMAGE_UPLOAD%2Fsfm1a3g0k3a0r1i1u2f?alt=media&token=232d87b5-307b-419b-9307-836146167164",
    dataAiHint: "professional man suit",
    bio: "Abdalla is an integral part of the team, known for his hard work and positive attitude. He actively participates in discussions and contributes to the overall success of the team's initiatives.",
    videoResumeUrl: "#",
    resumeUrl: "#",
    coverLetterUrl: "#",
    softSkills: [
      { name: "Teamwork", dateRecorded: "2024-05-12", IconComponent: Users },
      { name: "Creativity", dateRecorded: "2024-04-18", IconComponent: Palette },
      { name: "Analytical Skills", dateRecorded: "2024-03-22", IconComponent: BarChart },
    ],
     socialLinks: [
      { platform: "LinkedIn", url: "#", IconComponent: Linkedin },
    ],
  },
   {
    id: "wan-atikah",
    name: "Wan Atikah",
    role: "Team Specialist",
    imageUrl: "https://firebasestudio.googleapis.com/v0/b/studiopuppet-51028.appspot.com/o/IMAGE_UPLOAD%2Fsfm1a3g0k3a0r1i1u2f?alt=media&token=232d87b5-307b-419b-9307-836146167164",
    dataAiHint: "professional man suit",
    bio: "Wan Atikah consistently delivers high-quality work and is a reliable team member. Her expertise and dedication are highly valued within the team.",
    videoResumeUrl: "#",
    resumeUrl: "#",
    coverLetterUrl: "#",
    softSkills: [
      { name: "Attention to Detail", dateRecorded: "2024-05-08", IconComponent: Star },
      { name: "Research Skills", dateRecorded: "2024-04-11", IconComponent: Lightbulb },
      { name: "Time Management", dateRecorded: "2024-03-15", IconComponent: TrendingUp },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "#", IconComponent: Linkedin },
      { platform: "Twitter", url: "#", IconComponent: Twitter },
    ],
  },
  {
    id: "siti-nur",
    name: "Siti Nur",
    role: "Team Analyst",
    imageUrl: "https://firebasestudio.googleapis.com/v0/b/studiopuppet-51028.appspot.com/o/IMAGE_UPLOAD%2Fsfm1a3g0k3a0r1i1u2f?alt=media&token=232d87b5-307b-419b-9307-836146167164",
    dataAiHint: "professional man suit",
    bio: "Siti Nur provides valuable insights and support to the team. Her analytical abilities and proactive approach make her a key contributor to our projects.",
    videoResumeUrl: "#",
    resumeUrl: "#",
    coverLetterUrl: "#",
    softSkills: [
      { name: "Data Interpretation", dateRecorded: "2024-05-03", IconComponent: BarChart },
      { name: "Reporting", dateRecorded: "2024-04-25", IconComponent: MessageCircle },
      { name: "Organizational Skills", dateRecorded: "2024-03-28", IconComponent: Users },
    ],
     socialLinks: [
      { platform: "LinkedIn", url: "#", IconComponent: Linkedin },
    ],
  },
];
