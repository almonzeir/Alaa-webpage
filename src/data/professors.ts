import type { Professor } from "@/lib/types";
import { Linkedin, FlaskConical, Search } from "lucide-react";

export const professors: Professor[] = [
  {
    id: "dr-yunis",
    name: "Prof. Dr. Yunis",
    title: "Professor of Social Business",
    imageUrl: "https://placehold.co/400x400.png",
    dataAiHint: "professor portrait academic",
    bio: "Prof. Dr. Yunis is a distinguished academic and a visionary leader in the field of social business. With decades of experience, his work focuses on creating sustainable solutions to societal problems through innovative business models. He is passionate about empowering communities and fostering ethical entrepreneurship.",
    researchInterests: [
      "Social Entrepreneurship",
      "Sustainable Development Goals (SDGs)",
      "Impact Measurement",
      "Corporate Social Responsibility",
      "Microfinance and Financial Inclusion",
    ],
    publications: [
      {
        title: "The Dynamics of Social Innovation",
        journal: "Journal of Social Entrepreneurship",
        year: 2022,
        link: "#",
      },
      {
        title: "Measuring True Impact: Beyond Financial Metrics",
        journal: "Stanford Social Innovation Review",
        year: 2020,
        link: "#",
      },
      {
        title: "Building Resilient Social Enterprises",
        year: 2018,
        link: "#",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com", IconComponent: Linkedin },
      { platform: "ResearchGate", url: "https://www.researchgate.net", IconComponent: FlaskConical },
      { platform: "University Profile", url: "#", IconComponent: Search },
    ],
  },
  {
    id: "dr-suraya",
    name: "Prof. Dr. Suraya",
    title: "Professor of Collaborative Studies",
    imageUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female professor academic",
    bio: "Prof. Dr. Suraya is a renowned expert in collaborative research and interdisciplinary studies. Her research explores the intersections of technology, society, and education, aiming to build bridges between diverse fields of knowledge. She is a strong advocate for open science and collaborative learning environments.",
    researchInterests: [
      "Interdisciplinary Collaboration",
      "Technology Enhanced Learning",
      "Knowledge Management Systems",
      "Community-Engaged Research",
      "Ethics in AI and Data Science",
    ],
    publications: [
      {
        title: "Fostering Synergy: Models for Interdisciplinary Success",
        journal: "Higher Education Quarterly",
        year: 2023,
        link: "#",
      },
      {
        title: "The Role of Digital Platforms in Collaborative Knowledge Creation",
        journal: "Computers & Education",
        year: 2021,
        link: "#",
      },
      {
        title: "Ethical Frameworks for AI in Education",
        year: 2019,
        link: "#",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com", IconComponent: Linkedin },
      { platform: "ResearchGate", url: "https://www.researchgate.net", IconComponent: FlaskConical },
      { platform: "Personal Website", url: "#", IconComponent: Search },
    ],
  },
];
