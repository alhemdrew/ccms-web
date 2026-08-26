import { Link } from 'react-router-dom';
import { pageSeo, Seo } from '../seo/seo';

export function NotFoundPage() {
  return (
    <>
      <Seo {...pageSeo.contact} noIndex />
      <div className="page-shell-inner">
        <section className="section-spacing" data-reveal>
          <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="eyebrow">Page not found</p>
            <h1>We could not find that page.</h1>
            <p>
              The page you are looking for may have moved, or it may no longer be available. You can return to the homepage or contact the school for assistance.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/" className="button button-primary">Back to home</Link>
              <Link to="/contact" className="button button-secondary">Contact the school</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
