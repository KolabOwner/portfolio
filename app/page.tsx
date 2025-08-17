// app/page.tsx

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WritingSection from '@/components/WritingSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import { heroData, aboutData, showcaseImages } from '@/data/portfolio';

export default function Home() {
  return (
    <main>
      <HeroSection {...heroData} />
      <AboutSection {...aboutData} />
      <WritingSection />
      <ShowcaseSection images={showcaseImages} />
    </main>
  );
}
