// app/articles/first-paying-customer/page.tsx
import React from 'react';
import Link from 'next/link';

export default function FirstPayingCustomerArticle() {
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
            From 0 to First Paying Customer: How I Validated RezumAI While Taking 18 Units at Cal Poly
          </h1>
          <p className="article-description" style={{ fontSize: '1.125rem', marginBottom: '24px' }}>
            The messy, honest story of building a SaaS product between thermodynamics lectures and
            data structures assignments. Spoiler: my first customer paid while I was in a compiler design class.
          </p>
          <div style={{ fontSize: '0.875rem', opacity: 0.6 }}>
            January 17, 2025 · 12 min read
          </div>
        </header>

        <div className="divider" />

        {/* Article Content */}
        <div>
          <section className="writing-section">
            <h2 className="writing-header">The Dorm Room Revelation</h2>

            <p style={{ marginBottom: '20px' }}>
              October 2023, 11:47 PM. My roommate Jake slammed his laptop shut hard enough to make me
              look up from my systems programming homework.
            </p>

            <p style={{ marginBottom: '20px' }}>
              &quot;Another rejection,&quot; he said. &quot;That&apos;s 47 applications, 47 rejections.
              I&apos;m literally qualified for this job.&quot;
            </p>

            <p style={{ marginBottom: '20px' }}>
              Jake wasn&apos;t wrong. 3.9 GPA, two internships, solid projects. But his resume? Times New
              Roman, weird margins, and zero keyword optimization. It looked like something from 2003.
            </p>

            <p style={{ marginBottom: '20px' }}>
              I watched him spend another two hours &quot;fixing&quot; his resume in Google Docs, basically
              just moving bullet points around. That&apos;s when it hit me: everyone was playing a game
              they didn&apos;t understand. The ATS was filtering out great candidates who simply didn&apos;t
              know how to format their experience properly.
            </p>

            <div className="writing-card" style={{ backgroundColor: '#f9fafb' }}>
              <p style={{ fontStyle: 'italic' }}>
                &quot;What if there was a tool that could guarantee your resume passes ATS filters?&quot;
                I asked Jake. He looked at me like I&apos;d just offered him water in the desert.
                &quot;I&apos;d pay $100 for that right now,&quot; he said.
              </p>
              <p style={{ fontStyle: 'italic', marginTop: '12px' }}>
                That was the moment RezumAI was born.
              </p>
            </div>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">The MVP That Embarrassed Me</h2>

            <p style={{ marginBottom: '20px' }}>
              My first version was garbage. I mean, absolute trash. But I shipped it anyway.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Here&apos;s what version 0.0.1 of RezumAI (then called Kolab) looked like:
            </p>

            <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginBottom: '20px' }}>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                A single resume template (literally just one)
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                Manual keyword counting (ctrl+f style)
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                PDF export that broke 30% of the time
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                No user accounts (localStorage for everything)
              </li>
              <li style={{ opacity: 0.9 }}>
                UI that looked like a CS student made it (because one did)
              </li>
            </ul>

            <p style={{ marginBottom: '20px' }}>
              I built it in a weekend between a calculus midterm and a digital design project. The code
              was spaghetti, the design was Bootstrap defaults, and the &quot;AI&quot; was just regex
              patterns looking for keywords.
            </p>

            <p style={{ marginBottom: '20px' }}>
              But here&apos;s the thing: it worked. Barely, but it worked.
            </p>

            <div className="outline" style={{ padding: '24px', backgroundColor: '#fff7ed' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>The Tech Stack of Shame:</h4>
              <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  Frontend: Vanilla React with CSS modules (no framework)
                </li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  Backend: Express.js on my laptop using ngrok
                </li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  Database: A JSON file. Yes, a JSON file.
                </li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  &quot;AI&quot;: 50 lines of JavaScript with hardcoded rules
                </li>
                <li style={{ opacity: 0.9 }}>
                  Deployment: &quot;Hey Jake, go to this ngrok URL&quot;
                </li>
              </ul>
            </div>

            <p style={{ marginBottom: '20px', marginTop: '20px' }}>
              I showed it to Jake first. He used it, applied to three more jobs with the optimized resume,
              and got an interview within a week. Word spread in our dorm faster than news of free pizza.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">Beta Testing With Broke College Students</h2>

            <p style={{ marginBottom: '20px' }}>
              College students are the perfect beta testers. They&apos;re desperate, they&apos;re broke,
              and they&apos;ll try anything that might help them land a job. Plus, they&apos;re brutal
              with feedback.
            </p>

            <div className="writing-card" style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>Week 1-2: The Friends Phase</h4>
              <p className="article-description">
                10 users, all from my CS classes. Main feedback: &quot;It works but looks like shit.&quot;
                Fair. Also: &quot;Can you add more templates?&quot; and &quot;The PDF breaks my name if
                it has an accent.&quot;
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>Week 3-4: The Reddit Phase</h4>
              <p className="article-description">
                Posted in r/EngineeringStudents. Got roasted for the UI, praised for the concept. 50
                signups in 24 hours. Server (my laptop) crashed during my algorithms class. Professor
                was not amused by the ngrok notifications.
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>Week 5-6: The Reality Check</h4>
              <p className="article-description">
                100+ users, and the feedback was consistent: great idea, execution needs work. People
                wanted AI writing assistance, ATS scoring, multiple formats. I was still running this
                on localhost.
              </p>
            </div>

            <p style={{ marginBottom: '20px' }}>
              The turning point came when a user messaged me at 2 AM (I was up coding anyway):
            </p>

            <div className="outline" style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '12px' }}>
                &quot;Hey, your tool helped me get an interview at Microsoft. The resume scored 82 on
                their ATS according to my recruiter friend. But dude, your formatting is broken. Half
                my experience section got cut off because of some weird parsing issue. Fix this and
                you&apos;ve got something real.&quot;
              </p>
              <p style={{ fontWeight: 600 }}>
                That message changed everything.
              </p>
            </div>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">The Pivot That Saved Everything</h2>

            <p style={{ marginBottom: '20px' }}>
              Here&apos;s what I learned after 100 users: fancy features don&apos;t matter if the core
              product is broken. And our core was broken—resumes looked different every time they were
              parsed by different ATS systems.
            </p>

            <p style={{ marginBottom: '20px' }}>
              The problem? I was letting users create resumes with any format they wanted. Custom fonts,
              creative layouts, fancy graphics. The ATS systems hated it. Parse rates were maybe 60%
              on a good day.
            </p>

            <h3 className="article-title" style={{ fontSize: '1.375rem', marginBottom: '16px' }}>
              The Controversial Decision
            </h3>

            <p style={{ marginBottom: '20px' }}>
              I made a decision that pissed off half my users: standardized formats only. No more
              creative freedom. No more custom designs. Just 5 templates that I personally tested
              against 20 different ATS systems.
            </p>

            <div className="writing-card" style={{ backgroundColor: '#fee2e2' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px', color: '#991b1b' }}>
                What We Lost:
              </h4>
              <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>Design flexibility</li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>Creative expression</li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>50% of existing users who wanted &quot;pretty&quot; resumes</li>
              </ul>
            </div>

            <div className="writing-card" style={{ backgroundColor: '#dcfce7', marginTop: '16px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px', color: '#166534' }}>
                What We Gained:
              </h4>
              <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>99% ATS parse rate</li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>Consistent scoring across all systems</li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>Users actually getting interviews</li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>My first paying customer</li>
              </ul>
            </div>

            <p style={{ marginBottom: '20px', marginTop: '20px' }}>
              The standardized format wasn&apos;t just about compatibility. It forced users to focus
              on content over design. No more spending hours picking fonts. No more creative layouts
              that ATS couldn&apos;t read. Just clean, professional resumes that worked.
            </p>

            <div className="outline" style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>The Technical Implementation:</h4>
              <p style={{ marginBottom: '12px' }}>
                I rebuilt the entire PDF generation system in one brutal weekend (thanks, Red Bull).
                Instead of letting users freestyle, I created a rigid component system:
              </p>
              <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  Fixed margins (0.5 inches all around)
                </li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  Standard fonts only (Arial, Calibri, Times New Roman)
                </li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  No graphics, no columns, no tables
                </li>
                <li style={{ marginBottom: '6px', opacity: 0.9 }}>
                  Strict section ordering that ATS expects
                </li>
                <li style={{ opacity: 0.9 }}>
                  Every element tagged with proper metadata
                </li>
              </ul>
            </div>

            <p style={{ marginBottom: '20px', marginTop: '20px' }}>
              Users complained for exactly one week. Then the success stories started rolling in.
              Parse rates jumped to 99%. Interview rates tripled. And that&apos;s when Sarah
              became my first paying customer.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">First Dollar on the Internet</h2>

            <p style={{ marginBottom: '20px' }}>
              November 15, 2024, 2:34 PM. I was sitting in my Compiler Design class, half-listening
              to a lecture about LALR parsing, when the Stripe notification popped up on my phone:
            </p>

            <div className="writing-card" style={{ backgroundColor: '#f0f9ff', padding: '32px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>
                💰 You just got paid $29.00
              </p>
              <p className="article-description">
                Sarah M. purchased RezumAI Pro Monthly
              </p>
            </div>

            <p style={{ marginBottom: '20px', marginTop: '20px' }}>
              I literally gasped out loud. The professor stopped mid-sentence. Twenty students turned
              to look at me. I mumbled something about a family emergency and ran out of class.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Sarah was a business major I&apos;d never met. She found RezumAI through a Reddit comment
              I&apos;d left weeks ago and forgot about. Her email came an hour later:
            </p>

            <div className="outline" style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>
                &quot;Hey! Just subscribed to Pro. I&apos;ve been using the free version for two weeks
                and already got three interviews. The ATS scorer is genius. Worth every penny.
              </p>
              <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>
                Quick question—can you add a cover letter generator? I&apos;ll literally pay extra
                for that.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                Also, you should charge more. $29 is too cheap for something that actually works.&quot;
              </p>
            </div>

            <p style={{ marginBottom: '20px', marginTop: '20px' }}>
              I called my mom. I called my roommate. I probably would&apos;ve called my high school
              teacher if I had his number. Someone on the internet—a complete stranger—had given me
              money for something I built.
            </p>

            <h3 className="article-title" style={{ fontSize: '1.375rem', marginBottom: '16px' }}>
              The Floodgates Open
            </h3>

            <p style={{ marginBottom: '20px' }}>
              Sarah&apos;s payment was validation, but what happened next was insane. She posted about
              RezumAI in her business school Slack. Within 48 hours:
            </p>

            <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginBottom: '20px' }}>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                12 more Pro subscriptions ($348 MRR)
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                3 Lifetime purchases ($447 one-time)
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                200+ new free users
              </li>
              <li style={{ opacity: 0.9 }}>
                My first feature request list that would take months to build
              </li>
            </ul>

            <p style={{ marginBottom: '20px' }}>
              I spent that weekend adding the cover letter generator Sarah requested. Shipped it Sunday
              night at 3 AM, right before my Digital Systems homework was due. She upgraded to Lifetime
              the next day.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">What I&apos;d Do Differently</h2>

            <p style={{ marginBottom: '20px' }}>
              Looking back, there&apos;s so much I&apos;d change. But that&apos;s the point—you
              don&apos;t know what you don&apos;t know until you ship.
            </p>

            <div className="writing-card" style={{ marginBottom: '16px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>
                1. Start with payments from day one
              </h4>
              <p className="article-description">
                I waited 6 weeks to add Stripe. Should&apos;ve been week 1. Even if nobody pays,
                having that &quot;Pro&quot; button makes it feel real.
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '16px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>
                2. Standardize the format immediately
              </h4>
              <p className="article-description">
                I wasted weeks letting people create &quot;creative&quot; resumes. The standardized
                format should&apos;ve been the only option from the start.
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '16px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>
                3. Talk to users more
              </h4>
              <p className="article-description">
                I built features I thought were cool instead of what users actually needed. Every
                hour spent on calls saves 10 hours of wrong development.
              </p>
            </div>

            <div className="writing-card" style={{ marginBottom: '16px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>
                4. Use proper infrastructure
              </h4>
              <p className="article-description">
                Running production on ngrok from my laptop was stupid. Vercel + Firebase would&apos;ve
                taken 2 hours to set up and saved me dozens of crashes.
              </p>
            </div>

            <div className="writing-card">
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>
                5. Don&apos;t overthink the name
              </h4>
              <p className="article-description">
                I spent two weeks deciding between Kolab and RezumAI. Nobody cares about your clever
                name. They care if your product works.
              </p>
            </div>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">The Reality of Building While Studying</h2>

            <p style={{ marginBottom: '20px' }}>
              Let me be real about what &quot;building a startup in college&quot; actually looks like:
            </p>

            <div className="outline" style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '16px' }}>My Typical Day (Fall 2024):</h4>
              <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>6:00 AM:</strong> Wake up, check overnight user feedback, fix critical bugs
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>8:00 AM:</strong> Data Structures class (pretend to take notes, actually writing code)
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>10:00 AM:</strong> Digital Design lab (speed-run the assignment)
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>12:00 PM:</strong> Lunch = customer support emails
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>2:00 PM:</strong> Thermodynamics (completely lost, thinking about features)
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>4:00 PM:</strong> Actually focus on homework for 2 hours
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>6:00 PM:</strong> Dinner with friends (pitch RezumAI to anyone who&apos;ll listen)
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  <strong>8:00 PM - 2:00 AM:</strong> Real development time
                </li>
                <li style={{ opacity: 0.9 }}>
                  <strong>2:00 AM:</strong> Remember I have homework due at 8 AM
                </li>
              </ul>
            </div>

            <p style={{ marginBottom: '20px', marginTop: '20px' }}>
              It&apos;s not sustainable. I know that. But when users message you at midnight saying
              your product helped them land their dream job, the exhaustion feels worth it.
            </p>

            <div className="writing-card">
              <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>The GPA Impact:</h4>
              <p className="article-description">
                Went from 4.0 to 3.8. Best trade I ever made. I learned more about software engineering
                from shipping RezumAI than from any class. Real users don&apos;t care about your
                Big-O notation if your app crashes.
              </p>
            </div>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">Where We Are Now</h2>

            <p style={{ marginBottom: '20px' }}>
              As I write this (January 2025), RezumAI has:
            </p>

            <ul style={{ paddingLeft: '24px', listStyle: 'disc', marginBottom: '20px' }}>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                Hundreds of active users
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                89% average ATS compatibility score
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                Real revenue (enough to cover servers and Red Bull)
              </li>
              <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                Feature requests I won&apos;t finish until 2026
              </li>
              <li style={{ opacity: 0.9 }}>
                A founder who still has no idea what he&apos;s doing
              </li>
            </ul>

            <p style={{ marginBottom: '20px' }}>
              But more importantly, it&apos;s helping real people get real jobs. Jake (remember him
              from the beginning?) landed a role at Apple. Sarah&apos;s working at a startup in SF.
              Dozens of users have messaged me about offers they got using RezumAI-optimized resumes.
            </p>

            <p style={{ marginBottom: '20px' }}>
              That&apos;s the addiction. Not the revenue, not the metrics—the impact. Knowing that
              something you built in your dorm room is changing people&apos;s lives.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">Lessons for Student Founders</h2>

            <p style={{ marginBottom: '20px' }}>
              If you&apos;re sitting in a dorm room right now with an idea, here&apos;s what I wish
              someone had told me:
            </p>

            <div className="writing-card" style={{ backgroundColor: '#f9fafb', marginBottom: '20px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '16px' }}>The Student Advantage Is Real:</h4>
              <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  People want to help students. Use this shamelessly.
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  Your classmates are free beta testers who give honest feedback
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  You have nothing to lose. No mortgage, no kids, no real responsibilities
                </li>
                <li style={{ marginBottom: '8px', opacity: 0.9 }}>
                  University resources are free. WiFi, mentors, potential co-founders
                </li>
                <li style={{ opacity: 0.9 }}>
                  Being naive is a superpower. You don&apos;t know what&apos;s &quot;impossible&quot;
                </li>
              </ul>
            </div>

            <p style={{ marginBottom: '20px' }}>
              <strong>Ship embarrassing code.</strong> My first version was terrible. But it was
              better than the perfect version that never ships.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong>Charge money immediately.</strong> Free users will waste your time. Paying
              users will make you better.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong>Your grades will suffer.</strong> Accept it. You&apos;re not dropping out,
              but you&apos;re not getting a 4.0 either.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong>Use AI aggressively.</strong> I use Cursor for coding, ChatGPT for content,
              Gemini for the product. This is the advantage young builders have—we&apos;re not
              attached to old ways.
            </p>

            <p>
              <strong>Start now.</strong> Not next semester. Not after graduation. Now. Tonight.
              Open your laptop and write bad code that solves a real problem.
            </p>
          </section>

          <section className="writing-section">
            <h2 className="writing-header">The Next Chapter</h2>

            <p style={{ marginBottom: '20px' }}>
              I&apos;m writing this between studying for finals and pushing a new feature. RezumAI
              isn&apos;t a unicorn. It&apos;s not going to make me a millionaire (probably). But
              it&apos;s mine, and it works, and people pay for it.
            </p>

            <p style={{ marginBottom: '20px' }}>
              The plan? Keep building. Keep listening to users. Graduate (hopefully). Maybe raise
              funding, maybe stay bootstrapped. I genuinely don&apos;t know, and that&apos;s
              terrifying and exciting.
            </p>

            <p style={{ marginBottom: '20px' }}>
              What I do know is this: a year ago, I was just another CS student struggling through
              algorithms. Today, I run a real product with real customers. If I can do it while
              taking 18 units and maintaining (most of) my sanity, so can you.
            </p>

            <p>
              The barrier to entry has never been lower. The tools have never been better. The only
              thing stopping you is the fear of shipping something imperfect.
            </p>

            <p style={{ marginTop: '20px', fontWeight: 600 }}>
              Ship it anyway.
            </p>
          </section>

          <div className="divider" />

          <section className="writing-section">
            <div className="outline" style={{ padding: '32px', backgroundColor: '#111111', color: '#ffffff' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#ffffff', opacity: 1, marginBottom: '16px' }}>
                <strong>P.S. To Jake:</strong>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#ffffff', opacity: 0.9 }}>
                <em>Thanks for having a terrible resume. Your 47 rejections turned into hundreds of
                people getting jobs. Also, you owe me dinner at that expensive place in downtown SLO.
                You can afford it now with your Apple salary.</em>
              </p>
            </div>
          </section>

          <section className="writing-section">
            <div className="writing-card" style={{ backgroundColor: '#f0f9ff', textAlign: 'center', padding: '32px' }}>
              <p style={{ fontSize: '1.125rem', marginBottom: '16px' }}>
                <strong>Update: 2 hours after publishing this...</strong>
              </p>
              <p className="article-description">
                Sarah just referred 3 friends who all bought Lifetime. The compound effects of
                treating your first customers well cannot be overstated. Sarah, if you&apos;re
                reading this, drinks are on me next time you&apos;re in SLO. 🍺
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}