import type { LucideIcon } from "lucide-react";

// Retaining SocialLink as it might be used for team or general site social links
export interface SocialLink {
  platform: string;
  url: string;
  IconComponent: LucideIcon;
}

// Basic type for team members for the About Us page
export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string; // Using string for placeholder
  dataAiHint?: string;
}

// Generic type for downloadable resources
export interface DownloadableResource {
  title: string;
  description?: string;
  fileName: string; // e.g., "resume-template.docx"
  fileUrl: string; // Should be a public URL or path to a static asset
  icon?: LucideIcon;
}

// You can expand this file with more specific types as the project grows.
// For example, for soft skill articles, quizzes, etc.
