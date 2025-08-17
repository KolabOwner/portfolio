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
      title: "How I Turned Reddit Into a Win-Win Growth Engine",
      description: "The story of our journey from 0 to 50,000 users.",
      href: "/articles/reddit-growth-engine"
    },
    {
      title: "0 to 50,000 Users: A Candid Look Into Creative Growth",
      description: "The story of our journey from 0 to 50,000 users.",
      href: "/articles/creative-growth"
    },
    {
      title: "Building A Global Startup in South Korea",
      description: "A look inside building a saas startup that is benefited from the Korean startup ecosystem.",
      href: "/articles/global-startup-korea"
    },
    {
      title: "First Rezi Pitch Deck - 2016",
      description: "The first Rezi pitch deck created in August 2016 for the K Startup Grand Challenge.",
      href: "/articles/first-pitch-deck-2016"
    },
    {
      title: "On Startup Branding",
      description: "Exceptional branding was critical in the early days of Rezi. Here are thoughts on the topic aimed at early-stage startup founders",
      href: "/articles/startup-branding"
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