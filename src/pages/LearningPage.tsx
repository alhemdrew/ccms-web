import { useState } from 'react';
import images from '../data/images';
import { pageSeo, Seo } from '../seo/seo';

const learningModes = {
  think: {
    title: 'THINK',
    heading: 'We teach children to reason with clarity and courage.',
    text: 'Children are given time to analyse, compare, ask questions and develop independent thinking. We reward inquiry over imitation and depth over speed.',
  },
  create: {
    title: 'CREATE',
    heading: 'Creativity is not an add-on. It is how ideas take shape.',
    text: 'Art, design, storytelling and expression are woven through the day so children learn how to imagine, test and communicate ideas with confidence.',
  },
  explore: {
    title: 'EXPLORE',
    heading: 'Real-world exploration makes learning feel alive.',
    text: 'Through experiments, observations, trips, projects and shared inquiry, children make meaning from the world around them and become active constructors of knowledge.',
  },
  build: {
    title: 'BUILD',
    heading: 'Practise turns understanding into ability.',
    text: 'Whether through coding, hands-on projects, presentations or problem-solving tasks, children learn to apply ideas in ways that are visible, useful and memorable.',
  },
  lead: {
    title: 'LEAD',
    heading: 'Leadership grows through responsibility and public voice.',
    text: 'Students present, collaborate, organise and contribute — building confidence to speak, guide and serve with maturity and purpose.',
  },
};

export function LearningPage() {
  const [active, setActive] = useState<keyof typeof learningModes>('think');
  const current = learningModes[active];

  return (
    <>
      <Seo {...pageSeo.learning} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Learning</p>
            <h1>Learning that is active, purposeful and deeply <span className="spring-accent">human</span>.</h1>
          </div>
          <p>
            We do not separate academic development from identity, confidence and character. Every lesson is designed to help a child think more clearly and participate more fully.
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
        <div className="container learning-lab">
          <div className="learning-lab-controls" aria-label="Learning focus selector" data-reveal>
            {Object.entries(learningModes).map(([key, mode]) => (
              <button
                key={key}
                type="button"
                className={active === key ? 'learning-mode active' : 'learning-mode'}
                onClick={() => setActive(key as keyof typeof learningModes)}
              >
                {mode.title}
              </button>
            ))}
          </div>

          <div className="learning-lab-panel" key={active} data-reveal>
            <div className="learning-lab-copy">
              <p className="eyebrow">How we teach</p>
              <h2>{current.heading}</h2>
              <p>{current.text}</p>
            </div>
            <div className="learning-lab-visual" aria-hidden="false">
              <span className="lab-badge">CUDDLES</span>
              <div className="lab-visual-hero">
                <img
                  src={images.codingFeature.src}
                  alt={images.codingFeature.alt}
                  data-remote={images.codingFeature.remote}
                />
              </div>
              <div className="lab-visual-thumbs" role="list">
                <img src={images.storyMain.src} alt={images.storyMain.alt} data-remote={images.storyMain.remote} />
                <img src={images.childmindersScene.src} alt={images.childmindersScene.alt} data-remote={images.childmindersScene.remote} />
                <img src={images.campusBuild.src} alt={images.campusBuild.alt} data-remote={images.campusBuild.remote} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing muted-panel">
        <div className="container">
          <div className="value-panel-grid">
            {[
              ['Inquiry-based learning', 'Students explore ideas through observation, discussion, testing and reflection.'],
              ['Literacy & communication', 'Reading, writing, oral expression and storytelling are developed with confidence.'],
              ['Creativity & design', 'Art, imagination and experimentation help children learn how to generate ideas.'],
              ['Character development', 'Kindness, responsibility and resilience are woven into daily routines and teaching.'],
            ].map(([title, text]) => (
              <article className="info-card" key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" data-reveal>
        <div className="container">
          <div className="timeline">
            {[
              ['Foundation stage', 'Secure routines, language growth and sensory-rich learning build confidence.'],
              ['Primary years', 'Core skills deepen while children become more independent and expressive.'],
              ['Junior secondary', 'Project work, inquiry and leadership become more central to the experience.'],
              ['Senior preparation', 'Students engage with greater autonomy, complex ideas and public-facing work.'],
            ].map(([title, text]) => (
              <article key={title} className="timeline-card" data-reveal>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
