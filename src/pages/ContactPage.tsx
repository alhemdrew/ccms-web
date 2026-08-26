import { pageSeo, Seo } from '../seo/seo';

export function ContactPage() {
  return (
    <>
      <Seo {...pageSeo.contact} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>We’d love to <span className="spring-accent">hear</span> from you.</h1>
          </div>
          <p>
            Whether you are exploring admissions, requesting a school tour or asking a general question, we are always happy to speak with you.
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
        <div className="container contact-stack">
          <div className="contact-grid">
            <div className="contact-info-panel" data-reveal>
              <div className="section-header contact-header">
                <p className="eyebrow">Reach us</p>
                <h2>Speak directly with the school.</h2>
              </div>

              <div className="contact-intro">
                We are always happy to help families explore admissions, arrange a school visit or answer any questions about life at Cuddles.
              </div>

              <ul className="contact-list">
                <li>
                  <span className="contact-label">Address</span>
                  <strong>Plot 1802 Cadastral Zone C, 12 Apo Expressway, Apo, Abuja 900104, Federal Capital Territory</strong>
                </li>
                <li>
                  <span className="contact-label">Call</span>
                  <strong><a href="tel:07030137246">0703 013 7246</a></strong>
                </li>
                <li>
                  <span className="contact-label">Call</span>
                  <strong><a href="tel:07044442651">0704 444 2651</a></strong>
                </li>
                <li>
                  <span className="contact-label">Email</span>
                  <strong><a href="mailto:info@cuddleschildmindersandschools.com">info@cuddleschildmindersandschools.com</a></strong>
                </li>
                <li>
                  <span className="contact-label">Website</span>
                  <strong><a href="https://cuddleschildmindersandschools.com">cuddleschildmindersandschools.com</a></strong>
                </li>
              </ul>
            </div>

            <form className="enquiry-form" data-reveal>
              <div className="form-header-row">
                <p className="eyebrow">Send a note</p>
                <h3>Enquire with us</h3>
              </div>
              <label>
                Full name
                <input type="text" placeholder="[Name to be supplied]" />
              </label>
              <label>
                Email
                <input type="email" placeholder="[Email to be supplied]" />
              </label>
              <label>
                Enquiry type
                <select defaultValue="">
                  <option value="" disabled>Choose an option</option>
                  <option>Admission enquiry</option>
                  <option>General enquiry</option>
                  <option>School tour</option>
                </select>
              </label>
              <label>
                Message
                <textarea rows={4} placeholder="[Your message]" />
              </label>
              <button className="button button-primary" type="submit">Send enquiry</button>
            </form>
          </div>

          <div className="contact-map-panel" data-reveal>
            <div className="contact-visual">
              <div className="map-badge">Visit us</div>
              <iframe
                title="Cuddles Childminders & Schools location"
                src="https://www.google.com/maps?q=Plot%201802%20Cadastral%20Zone%20C%2C%2012%20Apo%20Expressway%2C%20Apo%2C%20Abuja%20900104&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="button button-primary map-directions"
                href="https://www.google.com/maps/search/?api=1&query=Plot%201802%20Cadastral%20Zone%20C%2C%2012%20Apo%20Expressway%2C%20Apo%2C%20Abuja%20900104"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
