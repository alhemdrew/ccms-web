import images from '../data/images';

export function AboutPage() {
  return (
    <div className="page-shell-inner">
      <section className="page-intro section-maroon">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">About us</p>
            <h1>Purpose-led education for <span className="spring-accent">curious</span>, confident children.</h1>
          </div>
          <p>
            Cuddles Childminders & Schools is a warm and rigorous learning environment shaped by thoughtful care, strong values and an ambitious view of what children can become.
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

      <section className="section-spacing">
        <div className="container two-column-copy">
          <div>
            <p className="eyebrow">Our philosophy</p>
            <h2>We believe every child is a thinker, maker and future leader.</h2>
          </div>
          <div>
            <p>
              At Cuddles, learning is not built around memorisation alone. It is shaped by curiosity, confidence and the courage to question, experiment and create.
            </p>
            <p>
              We support children to become clear communicators, resilient learners and kind citizens — preparing them not just for school but for a meaningful life beyond it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mission-vision-wrap">
          <div className="mission-vision-card mission-card">
            <p className="eyebrow">Our vision</p>
            <h2>We strive to create a school community where every child, regardless of background, is prepared to become a contemporary role model.</h2>
            <p>
              Grounded in faith, committed to unique growth and dedicated to the preservation of a healthy mind, our learners will exemplify independence, teamwork and moral values, growing into well-rounded individuals who positively impact their world.
            </p>
            <div className="mission-vision-tag">“Creatively Developing A Whole Child!”</div>
          </div>

          <div className="mission-vision-visual">
            <img src={images.childmindersScene.src} alt={images.childmindersScene.alt} />
          </div>

          <div className="mission-vision-card mission-card accent">
            <p className="eyebrow">Our mission</p>
            <h2>Through our values, we strive to nurture each child in our care into a healthy, diligent, honest and selfless individual.</h2>
            <p>
              We work cooperatively with stakeholders in the child’s world to foster faith, preserve the mind and creatively develop the whole child.
            </p>
            <div className="mission-vision-tag">“Creatively Developing A Whole Child!”</div>
          </div>

          <div className="about-circle-badge">
            <img src="/images/students/circle.png" alt="CCMS children learning together in a creative activity" />
          </div>
        </div>
      </section>

      <section className="section-spacing muted-panel">
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">What guides us</p>
            <h2>Values that shape the everyday experience.</h2>
          </div>
          <div className="value-panel-grid">
            {[
              ['Curiosity', 'Children are encouraged to ask better questions and explore ideas with joy.'],
              ['Character', 'Kindness, integrity and responsibility are practiced in how we learn and relate to others.'],
              ['Confidence', 'Children are given room to speak, perform, lead and contribute.'],
              ['Excellence', 'High standards are set with care, clarity and deep support.'],
            ].map(([title, text]) => (
              <article className="info-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">Our story</p>
            <h2>One institution with a clear arc of growth.</h2>
          </div>
          <div className="timeline">
            {[
              ['Early years', 'Warm, nurturing spaces where children feel safe, seen and ready to engage.'],
              ['Foundational school years', 'Structured learning that builds literacy, numeracy and confidence.'],
              ['Middle school development', 'Independent thinking, project work and richer inquiry-based learning.'],
              ['Leadership preparation', 'Public voice, entrepreneurship and thoughtful contribution to the wider world.'],
            ].map(([title, text]) => (
              <article key={title} className="timeline-card">
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
