// In AboutSection.tsx, modify to:
import Presentation from '@/components/Presentation'; // Add this import

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  showPresentation?: boolean; // Changed from presentationUrl
}

export default function AboutSection({ title, paragraphs, showPresentation }: AboutSectionProps) {
  return (
    <section className="container">
      <h1 className="writing-header">{title}</h1>

      <div className="writing-section">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p className="article-description whitespace-pre-line">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showPresentation && (
        <div className="writing-section">
          <Presentation />
        </div>
      )}

      <div className="divider" />
    </section>
  );
}