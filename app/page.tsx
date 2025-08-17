// app/page.tsx

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WritingSection from '@/components/WritingSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import { heroData, aboutData, showcaseImages } from '@/data/portfolio';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashton Gage',
  url: 'https://ashtongage.com',
  image: 'https://ashtongage.com/images/portfolio_image.webp',
  sameAs: [
    'https://github.com/KolabOwner',
    'https://www.linkedin.com/in/ashton-gage-1ba634237/',
    'https://x.com/ashton_gage',
  ],
  jobTitle: 'Computer Engineering Student & Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Cal Poly',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'California Polytechnic State University',
  },
  knowsAbout: ['Software Engineering', 'AI/ML', 'Web Development', 'SaaS'],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection {...heroData} />
      <AboutSection {...aboutData} />
      <WritingSection />
      <ShowcaseSection images={showcaseImages} />
    </main>
  );
}
