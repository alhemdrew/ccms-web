import { Link } from 'react-router-dom';
import managementStaff from '../data/management';
import { pageSeo, Seo } from '../seo/seo';

const featured = managementStaff[0];
const supporting = managementStaff.slice(1);

export function ManagementPage() {
  return (
    <>
      <Seo {...pageSeo.management} />
      <div className="page-shell-inner">
        <section className="page-intro section-maroon" data-reveal>
          <div className="container page-intro-grid">
            <div>
              <p className="eyebrow">Management</p>
              <h1>Leadership with <span className="spring-accent">purpose</span>.</h1>
            </div>
            <p className="management-banner-copy">
              Strong schools are shaped by people who create welcoming environments, protect standards, and help children grow with confidence, creativity and character.
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
          <div className="container management-hero">
            <div className="management-hero-visual">
              <img src={featured.image} alt={featured.photoAlt} />
            </div>
            <div className="management-hero-copy">
              <p className="eyebrow">School leadership</p>
              <h2>{featured.name}</h2>
              <p className="management-role">{featured.role}</p>
              <p>{featured.bio.split('\n')[0]}</p>
              <div className="management-hero-actions">
                <Link to="/admissions" className="button button-primary">Admissions</Link>
                <Link to="/about" className="button button-secondary">Our philosophy</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing section-paper" data-reveal>
          <div className="container management-intro-grid">
            <div>
              <p className="eyebrow">Purpose</p>
              <h2>Behind every learning environment is a group of people committed to shaping it.</h2>
            </div>
            <p>
              Cuddles is guided by a clear educational purpose: to help children become thoughtful, capable and confident people. That work is grounded in creativity, learning, character and independence — and it depends on a team that sees education as more than instruction.
            </p>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container management-philosophy">
            <div className="management-philosophy-copy">
              <p className="eyebrow">School philosophy</p>
              <h2>Creatively developing a whole child.</h2>
              <p>
                We believe children should be taught how to think, not what to think. That means leadership is not only about titles — it is about guiding children toward clarity, confidence, independence and thoughtful action.
              </p>
            </div>
            <div className="management-pill-grid">
              <span>Creativity</span>
              <span>Learning</span>
              <span>Character</span>
              <span>Independence</span>
              <span>Innovation</span>
              <span>Whole-child growth</span>
            </div>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container">
            <div className="section-header split-header">
              <div>
                <p className="eyebrow">Leadership team</p>
                <h2>The people responsible for creating the school experience.</h2>
              </div>
              <p>
                Each member contributes to the culture, operations and educational direction of the school in a way that supports children, families and the wider community.
              </p>
            </div>

            <div className="management-portrait-grid">
              {supporting.map((person) => (
                <article className="management-portrait-card" key={person.id}>
                  <div className="management-portrait-image">
                    <img src={person.image} alt={person.photoAlt} />
                  </div>
                  <div className="management-portrait-body">
                    <p className="eyebrow small">{person.role}</p>
                    <h3>{person.name || person.role}</h3>
                    <p>{person.bio && person.bio.length > 180 ? `${person.bio.slice(0, 180)}…` : person.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing section-maroon" data-reveal>
          <div className="container">
            <div className="section-header split-header">
              <div>
                <p className="eyebrow">Purpose</p>
                <h2>Education is guided by care, structure and long-term vision.</h2>
              </div>
              <p>
                The management team creates the conditions for learning to flourish — from academic planning and operational systems to safety, staff support and student wellbeing.
              </p>
            </div>

            <div className="management-focus-grid">
              <div className="management-focus-item">
                <span>Academic Development</span>
                <p>Curriculum direction, learning quality and purposeful academic growth.</p>
              </div>
              <div className="management-focus-item">
                <span>Student Development</span>
                <p>Wellbeing, confidence, character and a whole-child learning experience.</p>
              </div>
              <div className="management-focus-item">
                <span>School Operations</span>
                <p>Systems, processes and environments that keep learning organised and effective.</p>
              </div>
              <div className="management-focus-item">
                <span>Creative Development</span>
                <p>Arts, projects, expression and opportunities for imagination to grow.</p>
              </div>
              <div className="management-focus-item">
                <span>Innovation</span>
                <p>New ways of thinking, solving problems and preparing children for the future.</p>
              </div>
              <div className="management-focus-item">
                <span>Community</span>
                <p>Strong relationships between school, families and the wider learning community.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container management-closing">
            <p className="eyebrow">Our commitment</p>
            <h2>Great schools are built by people who believe children can become more.</h2>
            <p>Creatively developing a whole child.</p>
            <div className="management-closing-actions">
              <Link to="/admissions" className="button button-primary">Explore admissions</Link>
              <Link to="/contact" className="button button-secondary">Contact the school</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ManagementPage;
