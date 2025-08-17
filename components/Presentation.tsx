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
        "Building ResumeAI - AI-powered resume optimization SaaS",
        "Full-stack development with Next.js, TypeScript, and Firebase",
        "Integrating OpenAI APIs for intelligent content generation",
        "Learning that building != selling"
      ]
    },
    {
      title: "Technical Stack",
      points: [
        "Frontend: React, Next.js 14, TypeScript, Tailwind CSS",
        "Backend: Node.js, Firebase (Auth, Firestore, Functions)",
        "AI/ML: OpenAI GPT-4, Embeddings, Vector search",
        "DevOps: Vercel, GitHub Actions, Docker"
      ]
    },
    {
      title: "What I'm Looking For",
      points: [
        "Software engineering internships (Summer 2025)",
        "Part-time developer roles during school",
        "Mentorship from experienced engineers",
        "Teams solving real problems with modern tech"
      ]
    },
    {
      title: "Recent Projects",
      points: [
        "ResumeAI: Full-stack SaaS with subscription billing",
        "Portfolio site: Minimalist design with Next.js",
        "Course projects: Data structures, algorithms, systems programming",
        "Side experiments: Web scraping, automation tools"
      ]
    },
    {
      title: "Learning Journey",
      points: [
        "Self-taught web development alongside CS degree",
        "Progressed from HTML/CSS to full-stack in 12 months",
        "Built production app handling real users and payments",
        "Currently diving deeper into system design and scalability"
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