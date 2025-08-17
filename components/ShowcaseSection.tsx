import Image from 'next/image';
import { ShowcaseImage } from '@/types';

interface ShowcaseSectionProps {
  images: ShowcaseImage[];
}

export default function ShowcaseSection({ images }: ShowcaseSectionProps) {
  return (
    <section className="showcase-section">
      <div className="container">
        <h1 className="writing-header">Show {'>'} Tell</h1>
      </div>
      
      <div className="showcase-container" style={{marginTop: '32px'}}>
        <div className="grid gap-5 sm:gap-6 lg:gap-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative w-full rounded-xl overflow-hidden outline"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1845}
              height={index === 2 ? 1588 : 946}
              className="w-full h-auto object-cover"
              sizes="1280px"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}