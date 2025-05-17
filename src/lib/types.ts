import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  platform: string;
  url: string;
  IconComponent: LucideIcon;
}

export interface Publication {
  title: string;
  journal?: string;
  year?: number;
  link?: string;
}

export interface Professor {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  dataAiHint?: string;
  bio: string;
  researchInterests: string[];
  publications: Publication[];
  socialLinks: SocialLink[];
}

export interface SoftSkill {
  name: string;
  dateRecorded: string; // e.g., "2023-10-26"
  IconComponent: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint?: string;
  bio: string;
  videoResumeUrl?: string;
  resumeUrl?: string;
  coverLetterUrl?: string;
  softSkills: SoftSkill[];
  socialLinks?: SocialLink[]; // Optional social links for team members
}
