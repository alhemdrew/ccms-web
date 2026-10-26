import images from '../data/images';
import { pageSeo, Seo } from '../seo/seo';

const leadershipPrinciples = [
  {
    title: 'Purposeful learning',
    text: 'Every experience is designed to help children grow in confidence, independence and understanding.',
  },
  {
    title: 'Strong standards',
    text: 'High expectations are matched with care, support and clarity so children learn without fear.',
  },
  {
    title: 'Whole-child growth',
    text: 'Academic excellence sits alongside character, compassion, leadership and creative expression.',
  },
];

export function LeadershipPage() {
  return (
    <>
      <Seo {...pageSeo.leadership} />
      <div className="page-shell-inner">
        <section className="page-intro section-maroon" data-reveal>
          <div className="container page-intro-grid">
            <div>
              <p className="eyebrow">Leadership</p>
              <h1>Leadership Rooted In <span className="spring-accent">Purpose</span>.</h1>
            </div>
            <p>
              At Cuddles Childminders & Schools, leadership is about creating a thoughtful, confident and well-ordered learning environment where every child can flourish.
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
          <div className="container leadership-grid">
            <div className="leader-portrait" data-reveal>
              <img src={images.leadershipLead.src} alt={images.leadershipLead.alt} data-remote={images.leadershipLead.remote} />
            </div>
            <div className="leader-copy" data-reveal>
              <p className="eyebrow">Leadership and management</p>
              <h2>Strong values, clear standards and a child-first ethos.</h2>
              <p>
                Cuddles is led by a vision of education that is warm, ambitious and deeply aware of the child as a whole person.
              </p>
              <p>
                Our leadership approach creates a culture where children feel known, teachers feel supported, families feel respected, and standards remain high without sacrificing care.
              </p>
              <div className="leadership-pill-row" aria-label="Leadership principles">
                {leadershipPrinciples.map((item) => (
                  <span key={item.title}>{item.title}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing section-paper" data-reveal>
          <div className="container">
            <div className="section-header center">
              <p className="eyebrow">Leadership philosophy</p>
              <h2>A culture that helps children become confident, capable and kind.</h2>
            </div>

            <div className="leadership-principles">
              {leadershipPrinciples.map((item) => (
                <article className="leadership-principle" key={item.title} data-reveal>
                  <p className="eyebrow small">{item.title}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container leadership-story">
            <div className="leadership-story-copy">
              <p className="eyebrow">Why it matters</p>
              <h2>We teach children how to lead with character, not just confidence.</h2>
              <p>
                Leadership at Cuddles is shaped through responsibility, public voice, thoughtful decision-making and community life. We want children to grow into people who can think clearly, act kindly and contribute meaningfully.
              </p>
              <blockquote className="leadership-quote">“Creatively developing a whole child.”</blockquote>
            </div>

            <div className="leadership-inline-images">
              <img src={images.leadershipPresent.src} alt={images.leadershipPresent.alt} data-remote={images.leadershipPresent.remote} />
              <img src={images.leadershipPortrait.src} alt={images.leadershipPortrait.alt} data-remote={images.leadershipPortrait.remote} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}