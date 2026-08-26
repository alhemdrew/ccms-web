import images from '../data/images';
import { pageSeo, Seo } from '../seo/seo';

export function LeadershipPage() {
  return (
    <>
      <Seo {...pageSeo.leadership} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Leadership</p>
            <h1>Building a school culture rooted in <span className="spring-accent">purpose</span>.</h1>
          </div>
          <p>
            The institution is guided by a clear educational philosophy and a commitment to helping each child grow with character, confidence and capability.
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
            <p className="eyebrow">Leadership & management</p>
            <h2>Strong values, clear standards and a child-first ethos.</h2>
            <p>
              Cuddles is led by a vision of education that is warm, ambitious and deeply aware of the child as a whole person.
            </p>
            <p>
              Our leadership approach focuses on creating a culture where children feel known, teachers are empowered, families are respected and standards are high without being harsh.
            </p>
            <div className="leadership-inline-images">
              <img src={images.leadershipPresent.src} alt={images.leadershipPresent.alt} data-remote={images.leadershipPresent.remote} />
              <img src={images.leadershipPortrait.src} alt={images.leadershipPortrait.alt} data-remote={images.leadershipPortrait.remote} />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
