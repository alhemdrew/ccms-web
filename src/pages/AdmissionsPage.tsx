import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pageSeo, Seo } from '../seo/seo';

const admissionsStages = {
  creche: {
    title: 'Creche',
    text: 'Warm, responsive care for early development, secure routines and confidence in the first years of discovery.',
  },
  nursery: {
    title: 'Nursery',
    text: 'A focused blend of literacy, play, creativity and independence that builds the basis of confident learning.',
  },
  primary: {
    title: 'Primary',
    text: 'Structured learning that strengthens inquiry, communication, resilience and a genuine love for knowledge.',
  },
  junior: {
    title: 'Junior secondary',
    text: 'A more mature learning environment where students develop deeper reasoning and leadership readiness.',
  },
};

import images from '../data/images';

export function AdmissionsPage() {
  const [activeStage, setActiveStage] = useState<keyof typeof admissionsStages>('primary');
  const current = admissionsStages[activeStage];

  return (
    <>
      <Seo {...pageSeo.admissions} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Admissions</p>
            <h1>Begin with <span className="spring-accent">clarity</span>, care and a genuinely personal welcome.</h1>
          </div>
          <p>
            Our admissions process is designed to help families understand the educational fit, the culture of the school and the support available for each child.
          </p>
        </div>
      </section>

      <div className="page-intro-flourish" aria-hidden="true">
        <span className="flourish-line" />
        <span className="flourish-flower flower-rose"><span /></span>
        <span className="flourish-flower flower-gold"><span /></span>
        <span className="flourish-flower flower-mint"><span /></span>
        <span className="flourish-line" />
      </div>

      <section className="section-spacing" data-reveal>
        <div className="container story-spotlight-grid">
          <div className="story-main-image" data-reveal>
            <img src="/images/they explore.PNG" alt="Students exploring, learning and creating together" />
          </div>
          <div className="story-main-copy" data-reveal>
            <p className="eyebrow">Family-first process</p>
            <h2>Warm guidance and a genuine welcome from day one.</h2>
            <p>
              We believe the best school fit is built on trust, shared values and clarity about how each child will be supported to grow.
            </p>
            <div className="mini-stats">
              <div>
                <strong>Personal</strong>
                <span>support</span>
              </div>
              <div>
                <strong>Clear</strong>
                <span>process</span>
              </div>
              <div>
                <strong>Warm</strong>
                <span>welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" data-reveal>
        <div className="container admissions-stage-builder">
          <div className="stage-selector" aria-label="Stage selectors" data-reveal>
            {Object.entries(admissionsStages).map(([key, stage]) => (
              <button
                key={key}
                type="button"
                className={activeStage === key ? 'stage-button active' : 'stage-button'}
                onClick={() => setActiveStage(key as keyof typeof admissionsStages)}
              >
                {stage.title}
              </button>
            ))}
          </div>

          <div className="stage-panel" key={activeStage} data-reveal>
            <div>
              <p className="eyebrow">Choose a stage</p>
              <h2>{current.title}</h2>
            </div>
            <p>{current.text}</p>
          </div>
        </div>
      </section>

      <section className="section-spacing muted-panel" data-reveal>
        <div className="container">
          <div className="timeline">
            {[
              ['1. Enquire', 'Share your child’s age, needs and interests so we can guide you to the right stage.'],
              ['2. Tour', 'Visit the campus, meet the team and get a sense of the environment and learning culture.'],
              ['3. Assessment', 'We discuss readiness, routines and how we can support your child’s growth.'],
              ['4. Admission', 'Families receive clear guidance on the next steps, dates and onboarding support.'],
            ].map(([title, text]) => (
              <article key={title} className="timeline-card" data-reveal>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" data-reveal>
        <div className="container admissions-cta">
          <div className="admissions-cta-copy" data-reveal>
            <p className="eyebrow">Ready to start?</p>
            <h2>Get personalised guidance for your child's next step.</h2>
            <p>Speak with our admissions team to arrange a tour, ask questions or begin the application process.</p>
            <Link to="/contact" className="button button-primary">Contact admissions</Link>
          </div>
          <div className="admissions-cta-image" data-reveal>
            <div className="about-circle-badge">
              <img src="/images/students/circle.png" alt="CCMS identity circle artwork" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
