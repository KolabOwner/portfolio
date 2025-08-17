// components/WritingSection.tsx

import React from 'react';

interface ArticleProps {
  title: string;
  description: string;
  href?: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, href }) => {
  const content = (
    <div className="writing-card">
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="writing-section block hover:opacity-75 transition-opacity">
        {content}
      </a>
    );
  }

  return <div className="writing-section">{content}</div>;
};

const WritingSection: React.FC = () => {
  const articles = [
    {
      title: "How to Write a Resume That Actually Beats ATS Systems (The Complete 2025 Guide)",
      description: "The definitive guide to crafting ATS-optimized resumes that land interviews. Learn the exact formulas, AI strategies, and insider tips that helped our users achieve an 89% ATS pass rate.",
      href: "/articles/resume-writing-guide"
    },
    {
      title: "Revolutionizing Resume Optimization: How Our AI-Powered Keyword Analysis Beats ATS Filters",
      description: "Discover how our proprietary keyword analysis technology transforms job descriptions into actionable insights, helping candidates land interviews at companies that rely on automated screening systems.",
      href: "/articles/ai-keyword-analysis"
    },
    {
      title: "The Pitch Deck I'm Using to Launch RezumAI",
      description: "Building a comprehensive AI career platform as a Cal Poly student. Here's my pitch deck and what I've learned building my first SaaS.",
      href: "/articles/first-rezumai-pitch"
    }
  ];

  return (
    <div className="container">
      <section>
        <h1 className="writing-header">Writing</h1>

        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            description={article.description}
            href={article.href}
          />
        ))}
      </section>
    </div>
  );
};

export default WritingSection;
