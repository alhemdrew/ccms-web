import { Link } from 'react-router-dom';
import { featureCards, galleryStory, journeyStages, schoolProgrammes } from '../data/siteData';
import images from '../data/images';

export function HomePage() {
  return (
    <>
      <section className="hero section-spacing">
        <div className="container hero-grid">
          <div className="hero-copy">
           
            <p className="eyebrow hero-kicker">Cuddles</p>
            <h1>
              Raising thinkers.
              <span>Building leaders.</span>
            </h1>
            <p className="lede">A premium early years and school journey where curiosity, character and confidence are developed side by side.</p>
            <div className="hero-actions">
              <Link to="/admissions" className="button button-primary">Explore admissions</Link>
              <Link to="/about" className="button button-secondary">Our philosophy</Link>
            </div>
            <div className="hero-meta">
              <div>
                <span>Foundation</span>
                <strong>Creche • Nursery • Primary 1–6</strong>
              </div>
              <div>
                <span>Growth</span>
                <strong>JSS 1–3 • SS 1</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src={images.campusBuild.src}
                alt={images.campusBuild.alt}
                data-remote={images.campusBuild.remote}
              />
            </div>
            <div className="campus-photo">
              <img src={images.storyMain.src} alt={images.storyMain.alt} />
              <p className="campus-caption">Our campus — a place where learning, creativity and belonging grow together.</p>
            </div>
            <div className="floating-note">
              <span className="note-label">Whole-child learning</span>
              <strong>We teach children how to think, not what to think.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip section-maroon">
        <div className="container strip-grid">
          <div>
            <p className="eyebrow small">Institution</p>
            <h2>One vision. Two stages of growth.</h2>
          </div>
          <p>
            Cuddles Childminders School and The Cuddles Hall are connected stages of one educational
            journey — each designed to help children grow with confidence, curiosity and purpose.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <p className="eyebrow">What we build</p>
              <h2>Children who think deeply and lead confidently.</h2>
            </div>
            <p>
              Learning is shaped around inquiry, expression and practical action, not passive instruction.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((item, index) => (
              <article key={item.title} className="feature-card">
                <span className="feature-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">One school. Two journeys.</p>
            <h2>Each stage is intentionally designed for the child in front of it.</h2>
          </div>

          <div className="journey-grid">
            {journeyStages.map((stage, index) => (
              <article className="journey-card" key={stage.title}>
                <span className="journey-index">0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p className="journey-subtitle">{stage.subtitle}</p>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-spotlight section-spacing section-maroon">
        <div className="container story-spotlight-grid">
          <div className="story-main-image">
            <img src={images.storyMain.src} alt={images.storyMain.alt} data-remote={images.storyMain.remote} />
          </div>
          <div className="story-main-copy">
            <p className="eyebrow">The Cuddles experience</p>
            <h2>Children are encouraged to observe, question, build and present.</h2>
            <p>
              The learning journey connects confidence with capability — from early literacy and hands-on inquiry to public speaking, entrepreneurship and thoughtful leadership.
            </p>
            <div className="mini-stats">
              <div>
                <strong>Critical</strong>
                <span>thinking</span>
              </div>
              <div>
                <strong>Creative</strong>
                <span>expression</span>
              </div>
              <div>
                <strong>Practical</strong>
                <span>learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing section-innovation">
        <div className="container innovation-showcase">
          <div className="innovation-copy">
            <div className="innovation-status">Currently in development</div>
            <p className="eyebrow">Student innovation</p>
            <h2>
              They are not just learning technology.
              <span>They are beginning to build the technology they want to see.</span>
            </h2>
            <p>
              Cuddles students are already imagining a digital space built for connection, collaboration and ideas — a platform where they can share work, support one another and grow together.
            </p>
            <ul className="innovation-points">
              <li>Connect with peers and classmates</li>
              <li>Showcase projects, creativity and school life</li>
              <li>Collaborate on ideas with confidence</li>
            </ul>
            <div className="innovation-meta">
              <div>
                <strong>Social</strong>
                <span>student-first</span>
              </div>
              <div>
                <strong>Built</strong>
                <span>by learners</span>
              </div>
              <div>
                <strong>Future</strong>
                <span>in motion</span>
              </div>
            </div>
          </div>

          <div className="innovation-visual" aria-label="Students creating a future social platform">
            <div className="innovation-hero-card">
              <img src={images.innovationBuild.src} alt={images.innovationBuild.alt} data-remote={images.innovationBuild.remote} />
            </div>
            <div className="innovation-mini-card innovation-mini-top">
              <img src={images.innovationQuestion.src} alt={images.innovationQuestion.alt} data-remote={images.innovationQuestion.remote} />
            </div>
            <div className="innovation-mini-card innovation-mini-bottom">
              <img src={images.innovationExplore.src} alt={images.innovationExplore.alt} data-remote={images.innovationExplore.remote} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing section-paper">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <p className="eyebrow">Signature gallery</p>
              <h2>A visual story of childhood, creativity and confidence.</h2>
            </div>
            <Link to="/gallery" className="button button-secondary">View the gallery</Link>
          </div>

          <div className="gallery-compact">
            {galleryStory.map((story, index) => (
              <article
                key={story.label}
                className={`gallery-card story-${index + 1}`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(11, 23, 33, 0.18), rgba(11, 23, 33, 0.75)), url("${story.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <p className="eyebrow small">{story.label}</p>
                <h3>{story.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="young-author-preview">
            <div className="young-author-preview-copy">
              <p className="eyebrow">Three young authors</p>
              <h3>From curious readers to published young writers.</h3>
              <Link to="/achievements" className="button button-secondary">Explore their story</Link>
            </div>
            <div className="young-author-preview-image">
              <img src="/images/authors.jpg" alt="Three young authors from Cuddles" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing section-maroon">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <p className="eyebrow">Admissions</p>
              <h2>Choose a class. Explore. Enquire. Contact the school.</h2>
            </div>
            <Link to="/contact" className="button button-primary">Speak with the school</Link>
          </div>

          <div className="programme-list" aria-label="Available classes and years">
            {schoolProgrammes.map((programme) => (
              <span key={programme}>{programme}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
