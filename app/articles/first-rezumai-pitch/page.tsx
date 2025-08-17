// app/articles/first-rezumai-pitch/page.tsx
import React from 'react';
import Link from 'next/link';

export default function FirstRezumAIPitchArticle() {
  return (
    <article className="min-h-screen">
      <div className="container">
        {/* Back button */}
        <div className="hero-section">
          <Link
            href="/"
            className="inline-flex items-center opacity-60 hover:opacity-100 transition-opacity text-sm"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Article Header */}
        <header className="writing-section">
          <h1 className="writing-header" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            The Pitch Deck I&apos;m Using to Launch RezumAI (And What I&apos;ve Learned Building My First SaaS)
          </h1>
          <p className="article-description" style={{ fontSize: '1.125rem', marginBottom: '24px' }}>
            I&apos;m building RezumAI while studying Computer Engineering at Cal Poly. Here&apos;s the pitch deck
            I&apos;m using to talk to potential advisors, early users, and anyone who will listen to a college
            student trying to solve the broken job application process.
          </p>
          <div style={{ fontSize: '0.875rem', opacity: 0.6 }}>
            August 17, 2025 · 10 min read
          </div>
        </header>

        <div className="divider" />

        {/* Article Content */}
        <div>
          <section className="writing-section">
            <p style={{ marginBottom: '20px' }}>
              I started RezumAI in my dorm room after watching friends spend hours tailoring resumes only to get
              automated rejection emails. What began as a simple ATS optimizer has evolved into a comprehensive
              AI-powered career platform.
            </p>
            <p style={{ marginBottom: '20px' }}>
              What a journey.
            </p>
            <p style={{ marginBottom: '20px' }}>
              This post walks through the pitch deck I&apos;m using, but more importantly, it&apos;s about what
              I&apos;ve learned building a technical product while juggling engineering coursework and trying to
              understand the business side of SaaS.
            </p>
            <p>
              For context: There are plenty of pitch decks from funded startups online. But not many from engineering
              students building their first product. I hope sharing my process—mistakes and all—helps others in
              similar situations.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">The Structure and What I&apos;m Pitching on Each Slide</h2>
            <p style={{ marginBottom: '32px' }}>
              Here&apos;s the deck breakdown—why I included each slide and what I&apos;m actually saying during pitches.
            </p>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>0. Cover</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Setting the tone with clean design and our tagline: &quot;The Complete AI-Powered Career Assistant&quot;
              </p>
              <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                What I&apos;m saying: &quot;RezumAI transforms the entire job application journey—from resume creation
                to interview success—using cutting-edge AI technology.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>1. Problem We&apos;re Solving</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                75% of resumes never make it past ATS filters. Job seekers spend hours per application, yet most
                get auto-rejected. The tools available are either outdated Word templates or expensive services
                that don&apos;t understand modern hiring systems.
              </p>
              <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                What I&apos;m saying: &quot;The job application process is fundamentally broken. We&apos;re not just
                building another resume builder—we&apos;re creating an intelligent system that understands both what
                ATS systems want and what makes candidates stand out to humans.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>2. Our Vision</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Democratize access to career advancement tools. Every job seeker should have AI-powered assistance
                that previously only executives could afford through career coaches.
              </p>
              <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                What I&apos;m saying: &quot;By building the most comprehensive AI career platform, we&apos;re not
                just helping people get jobs—we&apos;re leveling the playing field in the job market.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>3. Our Solution - The Complete Feature Suite</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                RezumAI isn&apos;t just one tool—it&apos;s a comprehensive platform covering the entire application process:
              </p>
              <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Resume Building & Management:</strong> AI-powered builder with 5 professional templates,
                  unlimited resumes (Pro/Lifetime), folder organization, and real-time collaboration
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>AI Content Generation:</strong> Automatic bullet point writing, professional summaries,
                  tailored cover letters, and even resignation letters—all powered by advanced NLP
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>ATS Optimization:</strong> Real-time scoring (0-100 scale), keyword targeting, gap analysis,
                  and 23+ metrics for resume strength evaluation
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Expert Review Service:</strong> Human experts provide comprehensive feedback, with Pro
                  users getting 1 free review per month
                </li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.9, marginTop: '16px' }}>
                What I&apos;m saying: &quot;Think of it as Grammarly meets LinkedIn meets a personal career coach—all
                powered by AI that actually understands recruiting.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>4. Our Tech Stack & AI Integration</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Built with Next.js, TypeScript, and Firebase for scalability. Powered by Google Gemini for
                advanced language understanding. Our AI goes deeper than competitors:
              </p>
              <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Context-aware processing that understands industry nuances
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Minimal-touch optimization philosophy—maximum impact with minimal changes
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Smart bullet point generator creating achievement-focused content with metrics
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Resume-to-job matching analyzing compatibility in real-time
                </li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.9, marginTop: '16px' }}>
                What I&apos;m saying: &quot;We&apos;re not just using AI as a buzzword. Our system actually
                understands the semantic meaning of job requirements and can match them intelligently.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>5. Revenue Model</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Three-tier pricing strategy designed for different user needs:
              </p>
              <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Free Plan:</strong> 1 resume, basic templates, limited AI features, 3 PDF downloads
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Pro Plan ($29/month):</strong> Unlimited resumes, full AI suite, monthly expert review,
                  all premium templates, advanced analytics
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Lifetime Plan ($149 one-time):</strong> All Pro features forever, no recurring fees,
                  all future updates included
                </li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.9, marginTop: '16px' }}>
                What I&apos;m saying: &quot;The free tier gets users hooked on the value. Pro serves active job
                seekers. Lifetime captures value-conscious users who hate subscriptions.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>6. Traction & Early Validation</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Started with 50 beta users from my university. Now seeing organic growth through:
              </p>
              <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Word-of-mouth in engineering and business student communities
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Reddit posts in career-focused subreddits gaining traction
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  SEO content starting to rank for long-tail keywords
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  85%+ average ATS compatibility scores across user resumes
                </li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.9, marginTop: '16px' }}>
                What I&apos;m saying: &quot;We&apos;re seeing product-market fit signals. Users are upgrading to
                Pro after seeing their ATS scores improve, and they&apos;re telling their friends.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>7. Go-To-Market Strategy</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Three-pronged approach to reach job seekers where they are:
              </p>
              <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>University Partnerships:</strong> Starting with Cal Poly career center, expanding to UC system
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Content Marketing:</strong> SEO-optimized guides, ATS tips, industry-specific advice
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Community Building:</strong> Discord server for job seekers, weekly resume reviews
                </li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.9, marginTop: '16px' }}>
                What I&apos;m saying: &quot;We&apos;re building where our users already gather—university career
                centers, Reddit communities, and Discord servers. No expensive ads needed.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>8. Market Differentiators</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                What makes RezumAI different in a crowded market:
              </p>
              <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>AI Integration Depth:</strong> Google Gemini integration with context-aware processing,
                  not just basic templates
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Comprehensive Platform:</strong> End-to-end solution from resume to cover letter to
                  expert review
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Technical Innovation:</strong> Real-time processing, mobile-first design, API-ready
                  for enterprise
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>Human + AI Hybrid:</strong> Expert reviewers provide feedback AI can&apos;t
                </li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.9, marginTop: '16px' }}>
                What I&apos;m saying: &quot;Competitors either have good AI or good UX or expert reviews. We&apos;re
                the only platform combining all three at an accessible price point.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>9. The Bigger Picture</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                The recruiting industry is a $200B market ripe for disruption. LinkedIn owns professional networking,
                Indeed owns job boards, but nobody owns the application layer.
              </p>
              <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                What I&apos;m saying: &quot;This isn&apos;t about competing with LinkedIn. It&apos;s about owning
                the critical moment when professionals translate their experience into opportunities.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '24px' }}>
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>10. Team</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Solo technical founder with deep expertise in full-stack development and AI integration.
                Currently building advisory board with recruiting and B2B SaaS experience.
              </p>
              <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                What I&apos;m saying: &quot;I&apos;ve built the entire platform solo while maintaining a 3.8 GPA
                in Computer Engineering. Imagine what we could do with resources and the right team.&quot;
              </p>
            </div>

            <div className="writing-card">
              <h3 className="article-title" style={{ fontSize: '1.25rem' }}>11. The Ask</h3>
              <p className="article-description" style={{ marginBottom: '16px' }}>
                Looking for advisors, early users, and strategic partners who understand the recruiting space.
                Not raising capital yet—focused on reaching profitability through organic growth.
              </p>
              <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                What I&apos;m saying: &quot;I&apos;m not asking for money. I&apos;m asking for expertise,
                connections, and users who can help shape the product direction.&quot;
              </p>
            </div>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">What I&apos;ve Learned So Far</h2>

            <p style={{ marginBottom: '20px' }}>
              <strong>Technical skills aren&apos;t enough.</strong> I can build anything, but building the right
              thing requires understanding users deeply. I&apos;ve spent more time in career subreddits than
              coding lately, and that&apos;s been the right choice.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong>Start with one killer feature.</strong> RezumAI has dozens of features now, but what got
              people excited initially was simple: showing them their ATS score in real-time. Everything else
              came after we had that hook.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong>Distribution is harder than development.</strong> I can add a new AI feature in a weekend.
              Getting users to discover and trust the product? That&apos;s the real challenge. Every technical
              founder learns this eventually.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong>Pricing is psychological.</strong> The lifetime plan at $149 makes the $29/month Pro plan
              feel reasonable. Some users do the math and go lifetime. Others see the monthly as low-commitment.
              Both work.
            </p>

            <p>
              <strong>Being a student is an advantage.</strong> People are more willing to help, give feedback,
              and spread the word when they know you&apos;re building this between midterms and problem sets.
              Use that goodwill wisely.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">Final Thoughts</h2>

            <p style={{ marginBottom: '20px' }}>
              A good pitch deck doesn&apos;t guarantee success, and a perfect product doesn&apos;t sell itself.
              What matters is talking to users, iterating quickly, and having the stamina to push through the
              inevitable &quot;why am I doing this&quot; moments at 3 AM.
            </p>

            <p style={{ marginBottom: '20px' }}>
              RezumAI started as a class project. Now it&apos;s a real product with paying users. The journey from
              idea to revenue is shorter than you think if you&apos;re willing to ship imperfect versions and
              listen to feedback.
            </p>

            <p>
              If you&apos;re a student thinking about building something: start now. The worst that happens is you
              learn a ton and have something interesting to talk about in interviews. The best case? You might
              just build something people actually want.
            </p>
          </section>

          <div className="divider" />

        </div>
      </div>
    </article>
  );
}