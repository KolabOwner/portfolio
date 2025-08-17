// data/portfolio.ts

import { ShowcaseImage } from '@/types';

export const heroData = {
  image: '/images/portfolio_image.webp',
  title: 'Cal Poly CS Student → Builder',
  description: `Building AI-powered tools while figuring out this whole startup thing.

Currently deep in the trenches with RezumAI (my first real SaaS) and learning that coding is only 20% of the battle.

Open to internships, part-time roles, and anyone who wants to tell me why my startup isn't working.`,
  name: 'Ashton Gage',
  socialLinks: {
    twitter: 'https://x.com/ashton_gage',
    linkedin: 'https://www.linkedin.com/in/ashton-gage-1ba634237/',
    github: 'https://github.com/KolabOwner'
  }
};

export const aboutData = {
  title: 'About',
  paragraphs: [
    `Computer Engineering at Cal Poly. Built a full-stack AI SaaS from scratch using Next.js, TypeScript, Firebase, and Generative AI APIs (OpenAI, Gemini, Grok). Currently learning that knowing how to build something and knowing what to build are very different skills.`,

    `Spent the last year going deep on modern web development and AI integration. Transformed from someone who could write code for class to someone who can architect and ship production applications. My resume optimizer handles real-time AI processing, user auth, payment systems, and scalable deployment.`,

    `Looking for opportunities where I can apply my engineering skills while learning the business side from experienced teams. Particularly interested in AI/ML applications and startups solving real problems.`,
  ],
  showPresentation: true, // Changed from presentationUrl to showPresentation
};

export const showcaseImages: ShowcaseImage[] = [
  {
    id: '1',
    src: '/images/resume-ai-dashboard-light.png',
    alt: 'ResumeAI Dashboard - Light',
  },
  {
    id: '2',
    src: '/images/resume-ai-dashboard-dark.png',
    alt: 'ResumeAI Dashboard - Dark',
  },
  {
    id: '3',
    src: '/images/resume-preview-form-dark.png',
    alt: 'Resume Preview - Dark',
  },
  // Add REAL screenshots of your actual work
];
