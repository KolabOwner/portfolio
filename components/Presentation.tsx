'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  title: string;
  points: string[];
}

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Current Focus",
      points: [
        "Building RezumAI - Comprehensive AI-powered career platform",
        "Full-stack SaaS with real paying users and 89% ATS pass rate",
        "Integrating Google Gemini for advanced content generation",
        "Balancing Cal Poly Computer Engineering coursework with startup growth"
      ]
    },
    {
      title: "Technical Stack",
      points: [
        "Frontend: React, Next.js 14, TypeScript, Tailwind CSS",
        "Backend: Firebase (Auth, Firestore, Functions), Node.js",
        "AI/ML: Google Gemini API, Advanced prompt engineering, NLP",
        "Infrastructure: Vercel deployment, Real-time ATS scoring engine"
      ]
    },
    {
      title: "RezumAI Feature Suite",
      points: [
        "AI Resume Builder with 1100+ professional templates",
        "Real-time ATS scoring with visual feedback (0-100 scale)",
        "AI keyword targeting extracting job-specific requirements",
        "Expert review service with human professionals",
        "2-tier pricing: Free, Pro ($19/mo)"
      ]
    },
    {
      title: "What I'm Looking For",
      points: [
        "Software engineering internships (Summer 2026)",
        "Part-time developer roles compatible with studies",
        "Advisors with B2B SaaS or recruiting industry experience",
        "Opportunities to learn from senior engineers while contributing"
      ]
    },
    {
      title: "Achievements & Metrics",
      points: [
        "Users achieving 3x more keywords identified vs manual analysis",
        "2-second analysis time for comprehensive keyword extraction",
        "23+ metrics analyzed for resume strength evaluation",
        "Growing through organic Reddit engagement and SEO"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="presentation-container">
      {/* Slide Content */}
      <div className="presentation-slide">
        <h3 className="presentation-title">
          {slides[currentSlide].title}
        </h3>
        <div className="presentation-points">
          {slides[currentSlide].points.map((point, index) => (
            <div key={index} className="presentation-point">
              <span className="presentation-bullet">—</span>
              <p className="presentation-text">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="presentation-controls">
        <button
          onClick={prevSlide}
          className="presentation-nav-button"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="presentation-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`presentation-dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="presentation-nav-button"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
