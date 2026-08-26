import { pageSeo, Seo } from '../seo/seo';

export function TheCuddlesHallPage() {
  return (
    <>
      <Seo {...pageSeo.hall} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">The Cuddles Hall</p>
            <img src="/images/logo/tch.png" alt="The Cuddles Hall logo" className="tch-logo" />
            <h1>A next-stage learning environment for <span className="spring-accent">deeper</span> thinking and stronger identity.</h1>
          </div>
          <p>
            The Cuddles Hall is where children move from foundational confidence into more purposeful, independent and intellectually ambitious learning.
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
        <div className="container two-column-copy">
          <div>
            <p className="eyebrow">Middle years</p>
            <h2>Students become more assured, reflective and self-directed.</h2>
          </div>
          <div>
            <p>
              This stage emphasizes analytical thinking, greater independence and a stronger connection between academic life and personal growth.
            </p>
            <p>
              Children learn to manage more complex work, contribute to group learning and speak with maturity and clarity.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
