import images from '../data/images';
import { pageSeo, Seo } from '../seo/seo';

export function ChildmindersPage() {
  return (
    <>
      <Seo {...pageSeo.childminders} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Cuddles Childminders School</p>
            <h1>A <span className="spring-accent">nurturing</span> beginning for children who are learning how to thrive.</h1>
          </div>
          <p>
            The early years are a time for wonder, belonging and deep emotional security. Our nurturing environment helps every child feel safe enough to explore, connect and grow.
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
            <img src={images.childmindersScene.src} alt={images.childmindersScene.alt} data-remote={images.childmindersScene.remote} />
          </div>
          <div className="story-main-copy" data-reveal>
            <p className="eyebrow">Early foundations</p>
            <h2>Confidence grows from stability, care and joyful learning.</h2>
            <p>
              Children are supported through a blend of structure, warmth and meaningful play that makes early learning feel natural and exciting.
            </p>
            <div className="mini-stats">
              <div>
                <strong>Secure</strong>
                <span>routines</span>
              </div>
              <div>
                <strong>Rich</strong>
                <span>language</span>
              </div>
              <div>
                <strong>Confident</strong>
                <span>learners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" data-reveal>
        <div className="container">
          <div className="section-header split-header">
            <div>
              <p className="eyebrow">Early foundations</p>
              <h2>Confidence grows from stability, care and joyful learning.</h2>
            </div>
            <p>
              Children are supported through a blend of structure, warmth and meaningful play that makes early learning feel natural and exciting.
            </p>
          </div>
          <div className="value-panel-grid">
            {[
              ['Secure routines', 'A calm environment helps children settle, focus and participate with ease.'],
              ['Language & literacy', 'Stories, songs, conversations and rich vocabulary support communicative confidence.'],
              ['Social development', 'Children learn empathy, friendship, fairness and cooperation through real experience.'],
              ['School readiness', 'We build independence, attention and self-regulation that prepare children for the next stage.'],
            ].map(([title, text]) => (
              <article className="info-card" key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing muted-panel" data-reveal>
        <div className="container">
          <div className="two-column-copy">
            <div>
              <p className="eyebrow">Everyday experience</p>
              <h2>Learning that feels joyful, active and deeply personal.</h2>
            </div>
            <div>
              <p>
                Through imaginative play, music, movement, sensory exploration and guided discovery, children learn to make sense of the world around them.
              </p>
              <p>
                We help them build self-belief in the small moments: speaking up, trying again, finishing a task and listening with respect.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
