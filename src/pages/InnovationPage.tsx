import { pageSeo, Seo } from '../seo/seo';

const innovationFeatures = [
  {
    title: 'Design thinking',
    text: 'Children learn to identify a problem, imagine possibilities and prototype solutions with confidence.',
    image: '/images/they%20question.png',
  },
  {
    title: 'Coding & digital fluency',
    text: 'Students build real technology literacy through collaborative, hands-on experimentation.',
    image: '/images/coding/coding',
  },
  {
    title: 'Entrepreneurship',
    text: 'Children begin to pitch ideas, refine strategies and articulate value in ways that feel authentic.',
    image: '/images/They%20present.png',
  },
  {
    title: 'Public voice',
    text: 'Students grow into confident speakers, collaborators and young leaders.',
    image: '/images/They%20lead.png',
  },
];

export function InnovationPage() {
  return (
    <>
      <Seo {...pageSeo.innovation} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Innovation</p>
            <h1>Students are encouraged to create, test and lead <span className="spring-accent">boldly</span>.</h1>
          </div>
          <p>
            We give children opportunities to explore emerging ideas, solve practical problems and share their thinking with confidence.
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
        <div className="container">
          <div className="innovation-page-hero" data-reveal>
            <div className="innovation-page-copy" data-reveal>
              <span className="innovation-status">Currently in development</span>
              <h2>They are not just learning technology.</h2>
              <h3>They are beginning to build the technology they want to see.</h3>
              <p>
                A student-led digital space is being imagined and shaped — one where learners can connect, share ideas, collaborate and inspire one another.
              </p>
            </div>
            <div className="innovation-page-media" data-reveal>
              <img src="/images/they create.png" alt="Students creating tech ideas together" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" data-reveal>
        <div className="container value-panel-grid">
          {innovationFeatures.map((item) => (
            <article className="info-card innovation-info-card" key={item.title} data-reveal>
              <div className="innovation-thumb" style={{ backgroundImage: `url(${item.image})` }} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
