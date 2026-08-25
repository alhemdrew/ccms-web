export function ContactPage() {
  return (
    <div className="page-shell-inner">
      <section className="page-intro section-maroon">
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

      <section className="section-spacing">
            <div className="container contact-grid">
              <div className="contact-visual">
                <img src="/images/campus/sch_build.jpeg" alt="School campus" />
              </div>
              <div>
            <div className="section-header">
              <p className="eyebrow">Reach us</p>
              <h2>Speak directly with the school.</h2>
            </div>
            <ul className="contact-list">
              <li>Plot 1802 Cadastral Zone C, 12 Apo Expressway, Apo, Abuja 900104, Federal Capital Territory</li>
              <li><a href="tel:07030137246">0703 013 7246</a></li>
              <li><a href="tel:07044442651">0704 444 2651</a></li>
              <li><a href="mailto:info@cuddleschildmindersandschools.com">info@cuddleschildmindersandschools.com</a></li>
              <li><a href="https://cuddleschildmindersandschools.com">cuddleschildmindersandschools.com</a></li>
            </ul>
          </div>

          <form className="enquiry-form">
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
      </section>
    </div>
  );
}
