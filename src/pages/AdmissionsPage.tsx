import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { pageSeo, Seo } from '../seo/seo';
import { admissionsData, documentLibrary, faqItems, admissionsSteps } from '../data/admissions';
import contactConfig from '../config/contact';
import images from '../data/images';

function AdmissionsUploadForm({ selectedClassName }: { selectedClassName: string }) {
  const classOptions = useMemo(
    () => admissionsData.map((entry) => ({ id: entry.id, name: entry.name })),
    [],
  );

  const [formData, setFormData] = useState({
    childFirstName: '',
    childMiddleName: '',
    childSurname: '',
    dob: '',
    gender: '',
    nationality: '',
    currentSchool: '',
    classApplyingFor: selectedClassName,
    parentName: '',
    relationship: '',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    city: '',
    state: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    notes: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState<{ type: 'error'; message: string } | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isSubmitted]);

  const validateField = (fieldName: keyof typeof formData, value: string | boolean) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'childFirstName':
      case 'childSurname':
      case 'gender':
      case 'nationality':
      case 'classApplyingFor':
      case 'parentName':
      case 'relationship':
      case 'phone':
      case 'address':
      case 'city':
      case 'state':
      case 'emergencyName':
      case 'emergencyRelationship':
      case 'emergencyPhone':
        if (typeof value === 'string' && !value.trim()) {
          errorMessage = 'This field is required.';
        }
        break;
      case 'email':
        if (typeof value === 'string' && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = 'Please enter a valid email address.';
        }
        if (typeof value === 'string' && !value.trim()) {
          errorMessage = 'This field is required.';
        }
        break;
      case 'consent':
        if (value !== true) {
          errorMessage = 'You must confirm the information provided is accurate.';
        }
        break;
      default:
        break;
    }

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      if (errorMessage) {
        nextErrors[fieldName] = errorMessage;
      } else {
        delete nextErrors[fieldName];
      }
      return nextErrors;
    });
  };

  const handleChange = (fieldName: keyof typeof formData, value: string | boolean) => {
    setFormData((current) => ({ ...current, [fieldName]: value }));
    setStatus(null);
    if (fieldName !== 'notes' && fieldName !== 'currentSchool' && fieldName !== 'altPhone' && fieldName !== 'childMiddleName') {
      validateField(fieldName, value);
    }
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    (Object.entries(formData) as Array<[keyof typeof formData, string | boolean]>).forEach(([fieldName, value]) => {
      if (fieldName === 'notes' || fieldName === 'currentSchool' || fieldName === 'altPhone' || fieldName === 'childMiddleName') {
        return;
      }

      const fieldError = (() => {
        if (fieldName === 'email' && typeof value === 'string' && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address.';
        }

        if (typeof value === 'string' && !value.trim()) {
          return 'This field is required.';
        }

        if (fieldName === 'consent' && value !== true) {
          return 'You must confirm the information provided is accurate.';
        }

        return '';
      })();

      if (fieldError) {
        nextErrors[fieldName] = fieldError;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please complete all required fields correctly before submitting.' });
      return;
    }

    const submissionEndpoint = contactConfig.formSubmissionEndpoint || contactConfig.formspreeEndpoint;
    if (!submissionEndpoint || contactConfig.formMode === 'mailto') {
      setStatus({ type: 'error', message: 'Submission is currently unavailable. Please try again shortly.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([fieldName, value]) => {
        if (fieldName === 'consent') {
          return;
        }
        formPayload.append(fieldName, typeof value === 'string' ? value.trim() : '');
      });
      formPayload.append('_subject', `Admissions registration for ${formData.classApplyingFor}`);

      const response = await fetch(submissionEndpoint, {
        method: 'POST',
        body: formPayload,
        headers: {
          Accept: 'application/json',
        },
      });

      const responseText = await response.text();
      if (!response.ok) {
        throw new Error(responseText || 'Submission failed.');
      }

      setIsSubmitted(true);
      setStatus(null);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error && error.message && error.message !== 'Submission failed.'
          ? 'Something went wrong while submitting your application. Please check your connection and try again.'
          : 'Something went wrong while submitting your application. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/${contactConfig.whatsappNumber || '2347044442651'}?text=${encodeURIComponent(
    `Hello Cuddles Childminders & Schools, I would like to enquire about my child’s admissions application.`,
  )}`;
  const schoolAdmissionsEmail = 'bukola@cuddleschildmindersandschools.com';
  const schoolAdmissionsMailto = `mailto:${schoolAdmissionsEmail}?subject=${encodeURIComponent(`Admissions application for ${formData.childFirstName || 'student'} ${formData.childSurname || ''}`.trim())}&body=${encodeURIComponent([
    'Admissions application follow-up',
    '',
    `Child's name: ${[formData.childFirstName, formData.childSurname].filter(Boolean).join(' ') || 'Not provided'}`,
    `Class applying for: ${formData.classApplyingFor || 'Not provided'}`,
    `Parent / guardian name: ${formData.parentName || 'Not provided'}`,
    `Parent email: ${formData.email || 'Not provided'}`,
    `Phone number: ${formData.phone || 'Not provided'}`,
    `Residential address: ${formData.address || 'Not provided'}`,
    `City: ${formData.city || 'Not provided'}`,
    `State: ${formData.state || 'Not provided'}`,
    '',
    'Please find attached the supporting documents for this admissions application.',
  ].join('\n'))}`;

  if (isSubmitted) {
    return (
      <div ref={successRef} className="admissions-success-state">
        <div className="admissions-success-card">
          <div className="success-badge">Application Submitted Successfully</div>
          <h3>Thank you for your interest in Cuddles Childminders & Schools.</h3>
          <p>
            Your application has been received and our admissions team will review it. We may contact you using the information provided in your application.
          </p>
          <p>
            If the redirect does not happen automatically, please email{' '}
            <a href={schoolAdmissionsMailto} className="success-email-link">{schoolAdmissionsEmail}</a>
            {' '}with the student’s name and the supporting documents.
          </p>
          <div className="admissions-success-actions">
            <Link to="/" className="button button-primary">Back to Home</Link>
            <a href={whatsappLink} className="button button-secondary" target="_blank" rel="noreferrer">Contact Admissions</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="admissions-upload-form" noValidate onSubmit={handleSubmit}>
      <div className="form-section-block">
        <h3>Child information</h3>
        <div className="admissions-form-grid">
          <label>
            <span className="required-label">Child’s first name <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.childFirstName)}
              aria-describedby={errors.childFirstName ? 'childFirstName-error' : undefined}
              value={formData.childFirstName}
              onChange={(event) => handleChange('childFirstName', event.target.value)}
              onBlur={() => validateField('childFirstName', formData.childFirstName)}
              placeholder="First name"
            />
            {errors.childFirstName && <span id="childFirstName-error" className="field-error">{errors.childFirstName}</span>}
          </label>
          <label>
            <span>Child’s middle name</span>
            <input value={formData.childMiddleName} onChange={(event) => handleChange('childMiddleName', event.target.value)} placeholder="Middle name (optional)" />
          </label>
          <label>
            <span className="required-label">Child’s surname <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.childSurname)}
              value={formData.childSurname}
              onChange={(event) => handleChange('childSurname', event.target.value)}
              onBlur={() => validateField('childSurname', formData.childSurname)}
              placeholder="Surname"
            />
            {errors.childSurname && <span className="field-error">{errors.childSurname}</span>}
          </label>
          <label>
            <span className="required-label">Date of birth <span aria-hidden="true">*</span></span>
            <input
              type="date"
              aria-invalid={Boolean(errors.dob)}
              value={formData.dob}
              onChange={(event) => handleChange('dob', event.target.value)}
              onBlur={() => validateField('dob', formData.dob)}
            />
            {errors.dob && <span className="field-error">{errors.dob}</span>}
          </label>
          <label>
            <span className="required-label">Gender <span aria-hidden="true">*</span></span>
            <select
              aria-invalid={Boolean(errors.gender)}
              value={formData.gender}
              onChange={(event) => handleChange('gender', event.target.value)}
              onBlur={() => validateField('gender', formData.gender)}
            >
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Prefer to self-describe">Prefer to self-describe</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {errors.gender && <span className="field-error">{errors.gender}</span>}
          </label>
          <label>
            <span className="required-label">Nationality <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.nationality)}
              value={formData.nationality}
              onChange={(event) => handleChange('nationality', event.target.value)}
              onBlur={() => validateField('nationality', formData.nationality)}
              placeholder="Nationality"
            />
            {errors.nationality && <span className="field-error">{errors.nationality}</span>}
          </label>
          <label>
            <span>Current school</span>
            <input value={formData.currentSchool} onChange={(event) => handleChange('currentSchool', event.target.value)} placeholder="Current school (if applicable)" />
          </label>
          <label>
            <span className="required-label">Class applying for <span aria-hidden="true">*</span></span>
            <select
              aria-invalid={Boolean(errors.classApplyingFor)}
              value={formData.classApplyingFor}
              onChange={(event) => handleChange('classApplyingFor', event.target.value)}
              onBlur={() => validateField('classApplyingFor', formData.classApplyingFor)}
            >
              {classOptions.map((classOption) => (
                <option key={classOption.id} value={classOption.name}>{classOption.name}</option>
              ))}
            </select>
            {errors.classApplyingFor && <span className="field-error">{errors.classApplyingFor}</span>}
          </label>
        </div>
      </div>

      <div className="form-section-block">
        <h3>Parent or guardian information</h3>
        <div className="admissions-form-grid">
          <label>
            <span className="required-label">Parent / guardian full name <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.parentName)}
              value={formData.parentName}
              onChange={(event) => handleChange('parentName', event.target.value)}
              onBlur={() => validateField('parentName', formData.parentName)}
              placeholder="Full name"
            />
            {errors.parentName && <span className="field-error">{errors.parentName}</span>}
          </label>
          <label>
            <span className="required-label">Relationship to child <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.relationship)}
              value={formData.relationship}
              onChange={(event) => handleChange('relationship', event.target.value)}
              onBlur={() => validateField('relationship', formData.relationship)}
              placeholder="Mother / Father / Guardian"
            />
            {errors.relationship && <span className="field-error">{errors.relationship}</span>}
          </label>
          <label>
            <span className="required-label">Email address <span aria-hidden="true">*</span></span>
            <input
              type="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email)}
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
              onBlur={() => validateField('email', formData.email)}
              placeholder="name@email.com"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>
          <label>
            <span className="required-label">Phone number <span aria-hidden="true">*</span></span>
            <input
              type="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.phone)}
              value={formData.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
              onBlur={() => validateField('phone', formData.phone)}
              placeholder="Primary phone number"
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </label>
          <label>
            <span>Alternative phone number</span>
            <input type="tel" inputMode="tel" value={formData.altPhone} onChange={(event) => handleChange('altPhone', event.target.value)} placeholder="Alternative phone number" />
          </label>
          <label>
            <span className="required-label">Residential address <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.address)}
              value={formData.address}
              onChange={(event) => handleChange('address', event.target.value)}
              onBlur={() => validateField('address', formData.address)}
              placeholder="Street address"
            />
            {errors.address && <span className="field-error">{errors.address}</span>}
          </label>
          <label>
            <span className="required-label">City <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.city)}
              value={formData.city}
              onChange={(event) => handleChange('city', event.target.value)}
              onBlur={() => validateField('city', formData.city)}
              placeholder="City"
            />
            {errors.city && <span className="field-error">{errors.city}</span>}
          </label>
          <label>
            <span className="required-label">State <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.state)}
              value={formData.state}
              onChange={(event) => handleChange('state', event.target.value)}
              onBlur={() => validateField('state', formData.state)}
              placeholder="State"
            />
            {errors.state && <span className="field-error">{errors.state}</span>}
          </label>
        </div>
      </div>

      <div className="form-section-block">
        <h3>Emergency contact</h3>
        <div className="admissions-form-grid">
          <label>
            <span className="required-label">Emergency contact name <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.emergencyName)}
              value={formData.emergencyName}
              onChange={(event) => handleChange('emergencyName', event.target.value)}
              onBlur={() => validateField('emergencyName', formData.emergencyName)}
              placeholder="Emergency contact name"
            />
            {errors.emergencyName && <span className="field-error">{errors.emergencyName}</span>}
          </label>
          <label>
            <span className="required-label">Relationship <span aria-hidden="true">*</span></span>
            <input
              aria-invalid={Boolean(errors.emergencyRelationship)}
              value={formData.emergencyRelationship}
              onChange={(event) => handleChange('emergencyRelationship', event.target.value)}
              onBlur={() => validateField('emergencyRelationship', formData.emergencyRelationship)}
              placeholder="Relationship"
            />
            {errors.emergencyRelationship && <span className="field-error">{errors.emergencyRelationship}</span>}
          </label>
          <label>
            <span className="required-label">Phone number <span aria-hidden="true">*</span></span>
            <input
              type="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.emergencyPhone)}
              value={formData.emergencyPhone}
              onChange={(event) => handleChange('emergencyPhone', event.target.value)}
              onBlur={() => validateField('emergencyPhone', formData.emergencyPhone)}
              placeholder="Emergency phone number"
            />
            {errors.emergencyPhone && <span className="field-error">{errors.emergencyPhone}</span>}
          </label>
        </div>
      </div>

      <div className="form-section-block">
        <h3>Additional information</h3>
        <label className="full-width-field">
          Is there anything else you would like us to know about your child?
          <textarea
            value={formData.notes}
            onChange={(event) => handleChange('notes', event.target.value)}
            rows={5}
            placeholder="Optional information about your child or family"
          />
        </label>
      </div>

      <label className="consent-box">
        <input
          type="checkbox"
          checked={formData.consent}
          aria-invalid={Boolean(errors.consent)}
          onChange={(event) => handleChange('consent', event.target.checked)}
          onBlur={() => validateField('consent', formData.consent)}
        />
        <span className="required-label">
          I confirm that the information provided is accurate to the best of my knowledge. <span aria-hidden="true">*</span>
        </span>
      </label>
      {errors.consent && <span className="field-error consent-error">{errors.consent}</span>}

      <div className="admissions-upload-actions">
        <button type="submit" className="button button-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting application...' : 'Submit registration'}
        </button>
      </div>

      {status && (
        <div className="form-error" role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}

export function AdmissionsPage() {
  const [selectedClassId, setSelectedClassId] = useState('pre-nursery');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [documentFilter, setDocumentFilter] = useState<'all' | 'registration' | 'health' | 'policy' | 'annual'>('registration');

  const selectedClass = useMemo(
    () => admissionsData.find((entry) => entry.id === selectedClassId) || admissionsData[0],
    [selectedClassId],
  );

  const schoolSupportNumber = contactConfig.phoneNumber || '07030137246';
  const admissionsNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Find a Class', href: '#classes' },
    { label: 'Requirements', href: '#requirements' },
    { label: 'Documents', href: '#documents' },
    { label: 'Registration', href: '#registration' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const groupedClasses = useMemo(
    () => ({
      'Early Years': admissionsData.filter((entry) => entry.category === 'Preschool'),
      'Basic Elementary': admissionsData.filter((entry) => entry.category === 'Basic Elementary'),
      'Higher Basic / Secondary': admissionsData.filter((entry) => entry.category === 'Secondary'),
    }),
    [],
  );

  const filteredDocuments = useMemo(() => {
    const filters: Record<typeof documentFilter, (doc: (typeof documentLibrary)[number]) => boolean> = {
      all: () => true,
      registration: (doc) => doc.type === 'Registration form',
      health: (doc) => doc.type === 'Health form',
      policy: (doc) => doc.type === 'School policy' || doc.type === 'Official statement',
      annual: (doc) => doc.type === 'Yearly expectations',
    };

    return documentLibrary.filter(filters[documentFilter]);
  }, [documentFilter]);

  const whatsappLink = `https://wa.me/${contactConfig.whatsappNumber || '2347030137246'}?text=${encodeURIComponent(
    `Hello Cuddles Childminders & Schools, I would like to enquire about admission for ${selectedClass.name}.`,
  )}`;

  return (
    <>
      <Seo {...pageSeo.admissions} />
      <div className="page-shell-inner admissions-page-shell">
        <section id="overview" className="page-intro section-maroon admissions-hero" data-reveal>
          <div className="container admissions-hero-layout">
            <div className="admissions-hero-copy">
              <p className="eyebrow">Admissions</p>
              <h1>Where your child’s next chapter begins.</h1>
              <p className="admissions-hero-supporting">
                Choosing a school is a big decision. We’ve made the admissions journey simple, clear and reassuring so you can focus on choosing the right beginning for your child.
              </p>
              <div className="admissions-hero-actions">
                <a href="#classes" className="button button-primary">Find your child’s class</a>
                <a href={`tel:${schoolSupportNumber}`} className="button button-secondary">Talk to Admissions</a>
              </div>
            </div>

            <div className="admissions-hero-visual">
              <img src={images.schoolFeature.src} alt={images.schoolFeature.alt} />
            </div>
          </div>
        </section>

        <div className="page-intro-flourish" aria-hidden="true">
          <span className="flourish-line" />
          <span className="flourish-flower flower-rose"><span /></span>
          <span className="flourish-flower flower-gold"><span /></span>
          <span className="flourish-flower flower-mint"><span /></span>
          <span className="flourish-line" />
        </div>

        <section className="admissions-quick-nav-wrap" data-reveal>
          <div className="container">
            <nav className="admissions-quick-nav" aria-label="Admissions quick navigation">
              {admissionsNav.map((item) => (
                <a key={item.href} href={item.href} className="admissions-quick-link">{item.label}</a>
              ))}
            </nav>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container">
            <div className="admissions-at-a-glance">
              <div className="section-header center compact-header">
                <p className="eyebrow">Admissions at a glance</p>
                <h2>Everything you need to get started.</h2>
              </div>

              <div className="admissions-glance-grid">
                <div className="glance-card">
                  <span>01</span>
                  <h3>Choose your child’s class</h3>
                  <p>Explore the right learning stage for your child.</p>
                </div>
                <div className="glance-card">
                  <span>02</span>
                  <h3>Review requirements</h3>
                  <p>Understand what is needed before you begin.</p>
                </div>
                <div className="glance-card">
                  <span>03</span>
                  <h3>Download forms</h3>
                  <p>Access the relevant registration and health documents.</p>
                </div>
                <div className="glance-card">
                  <span>04</span>
                  <h3>Continue registration</h3>
                  <p>Take the next step with confidence and support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container story-spotlight-grid admissions-community">
            <div className="story-main-image">
              <img src={images.schoolFeature.src} alt={images.schoolFeature.alt} />
            </div>
            <div className="story-main-copy">
              <p className="eyebrow">One school. Many stages.</p>
              <h2>One continuous journey from early years to the next stage of learning.</h2>
              <p>
                Cuddles Childminders School and The Cuddles Hall support different stages of a child’s educational journey with a consistent philosophy, strong values and a clear sense of progression.
              </p>
              <div className="admissions-community-grid">
                <div className="community-card">
                  <span>Cuddles Childminders School</span>
                  <p>Early years and foundational development with warmth, routine and confidence-building.</p>
                </div>
                <div className="community-card">
                  <span>The Cuddles Hall</span>
                  <p>Continuing the educational journey with structure, aspiration and depth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="section-spacing" data-reveal>
          <div className="container">
            <div className="section-header center compact-header">
              <p className="eyebrow">Admission journey</p>
              <h2>Your admissions journey, made simple.</h2>
              <p className="section-lead">From your first enquiry to registration, here is what to expect.</p>
            </div>

            <div className="admissions-journey">
              {[
                { step: '01', title: 'Explore', text: 'Discover Cuddles and identify the class that best matches your child.' },
                { step: '02', title: 'Choose', text: 'Select the appropriate class and review its requirements.' },
                { step: '03', title: 'Prepare', text: 'Download the forms and supporting documents you need.' },
                { step: '04', title: 'Complete', text: 'Fill in the required information and complete your registration documents.' },
                { step: '05', title: 'Submit', text: 'Continue the registration process and submit your completed documents.' },
                { step: '06', title: 'Get support', text: 'Need help? Our admissions team is available to guide you.' },
              ].map((item) => (
                <div className="journey-card" key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="classes" className="section-spacing" data-reveal>
          <div className="container admissions-selector-wrap">
            <div className="section-header center compact-header">
              <p className="eyebrow">Find a class</p>
              <h2>Find the right place for your child.</h2>
              <p className="section-lead">Select a class to see the relevant requirements, documents and next steps.</p>
            </div>

            <div className="admissions-selector-grid">
              <div className="admissions-class-list" role="tablist" aria-label="Class selector">
                {Object.entries(groupedClasses).map(([groupName, group]) => (
                  <div className="class-group" key={groupName}>
                    <h3>{groupName}</h3>
                    <div className="class-group-list">
                      {group.map((entry) => (
                        <button
                          key={entry.id}
                          type="button"
                          className={selectedClass.id === entry.id ? 'admissions-class-button active' : 'admissions-class-button'}
                          onClick={() => setSelectedClassId(entry.id)}
                        >
                          {entry.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="admissions-class-panel" key={selectedClass.id}>
                <div className="admissions-class-panel-header">
                  <div>
                    <p className="eyebrow">Class</p>
                    <h3>{selectedClass.name}</h3>
                  </div>
                  <span className="admissions-stage-tag">{selectedClass.stage}</span>
                </div>

                <p className="class-panel-description">{selectedClass.description}</p>

                <div id="requirements" className="admissions-detail-grid">
                  <div className="requirements-card">
                    <h4>What to expect</h4>
                    {selectedClass.yearlyExpectations ? (
                      <div className="mini-document-link">
                        <span>{selectedClass.yearlyExpectations.title}</span>
                        <a href={selectedClass.yearlyExpectations.href} target="_blank" rel="noreferrer">View</a>
                        <a href={selectedClass.yearlyExpectations.href} download>Download</a>
                      </div>
                    ) : (
                      <p className="muted">Class-specific expectations are currently being updated. Please contact Admissions for the latest guidance.</p>
                    )}
                  </div>

                  <div className="requirements-card">
                    <h4>Admission requirements</h4>
                    <ul className="admissions-list">
                      {selectedClass.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="requirements-card">
                    <h4>Documents you’ll need</h4>
                    <ul className="admissions-list">
                      {selectedClass.registrationDocument && (
                        <li>
                          <a href={selectedClass.registrationDocument.href} target="_blank" rel="noreferrer">{selectedClass.registrationDocument.title}</a>
                        </li>
                      )}
                      {selectedClass.healthDocument && (
                        <li>
                          <a href={selectedClass.healthDocument.href} target="_blank" rel="noreferrer">{selectedClass.healthDocument.title}</a>
                        </li>
                      )}
                      {!selectedClass.registrationDocument && !selectedClass.healthDocument && (
                        <li className="muted">No confirmed class-specific documents are available at the moment. Please contact Admissions for guidance.</li>
                      )}
                    </ul>
                  </div>

                  <div className="requirements-card">
                    <h4>Next steps</h4>
                    <ul className="admissions-list">
                      {selectedClass.nextSteps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="section-spacing section-paper" data-reveal>
          <div className="container">
            <div className="section-header split-header">
              <div>
                <p className="eyebrow">Document centre</p>
                <h2>Everything you need, in one place.</h2>
              </div>
              <p>
                Download the forms and information relevant to your child’s application. Everything below is linked to verified project documents.
              </p>
            </div>

            <div className="document-filter-bar" aria-label="Document filters">
              {[
                { label: 'All', value: 'all' },
                { label: 'Annual', value: 'annual' },
                { label: 'Registration', value: 'registration' },
                { label: 'Health', value: 'health' },
                { label: 'Policies', value: 'policy' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={documentFilter === filter.value ? 'document-filter active' : 'document-filter'}
                  onClick={() => setDocumentFilter(filter.value as typeof documentFilter)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="admissions-documents-grid">
              {filteredDocuments.map((doc) => (
                <article className="admissions-document-card" key={doc.id}>
                  <div className="document-card-topline">
                    <span>{doc.type}</span>
                    <span>{doc.className || 'All'}</span>
                  </div>
                  <h3>{doc.title}</h3>
                  <p className="muted">{doc.type === 'Yearly expectations' ? `Academic year: ${doc.year || 'Current cycle'}` : 'Relevant to admission and school preparation.'}</p>
                  <div className="document-actions-inline">
                    <a href={doc.href} target="_blank" rel="noreferrer" className="button button-secondary">View</a>
                    <a href={doc.href} download className="button button-primary">Download</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="section-spacing" data-reveal>
          <div className="container admissions-registration-wrap">
            <div className="section-header split-header">
              <div>
                <p className="eyebrow">Registration</p>
                <h2>Ready to continue?</h2>
              </div>
              <p>
                Once you have downloaded and completed the necessary forms, you can continue through the next step with confidence.
              </p>
            </div>

            <div className="registration-steps">
              <div className="registration-step">
                <span>01</span>
                <h3>Download</h3>
                <p>Get the forms relevant to your child’s class and level.</p>
              </div>
              <div className="registration-step">
                <span>02</span>
                <h3>Complete</h3>
                <p>Fill in the required information carefully and keep your documents ready.</p>
              </div>
              <div className="registration-step">
                <span>03</span>
                <h3>Continue</h3>
                <p>Contact Admissions to continue once your forms are ready.</p>
              </div>
            </div>

            <div className="admissions-cta-panel registration-panel">
              <div>
                <p className="eyebrow">Next step</p>
                <h2>We’re here to help you take the next step with clarity.</h2>
              </div>
              <div className="admissions-cta-actions">
                <a href={`tel:${schoolSupportNumber}`} className="button button-primary">Call Admissions</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-secondary">Chat on WhatsApp</a>
              </div>
            </div>

            <AdmissionsUploadForm selectedClassName={selectedClass.name} />
          </div>
        </section>

        <section className="section-spacing section-maroon" data-reveal>
          <div className="container admissions-support-panel">
            <div>
              <p className="eyebrow">Admissions support</p>
              <h2>Questions? You don’t have to figure it out alone.</h2>
              <p>Whether you need help choosing the right class, understanding the documents, or taking the next step, our admissions team is ready to support you.</p>
            </div>
          </div>
        </section>

        <section id="faqs" className="section-spacing" data-reveal>
          <div className="container">
            <div className="section-header center compact-header">
              <p className="eyebrow">FAQs</p>
              <h2>Helpful answers for families beginning the admissions process.</h2>
            </div>

            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div key={item.question} className={openFaq === index ? 'faq-item open' : 'faq-item'}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{item.question}</span>
                    <span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container admissions-final-cta">
            <div>
              <p className="eyebrow">Take the next step</p>
              <h2>Give your child a beginning worth remembering.</h2>
            </div>
            <p>
              Explore the right class, prepare your documents and begin your child’s next chapter with confidence.
            </p>
            <div className="admissions-cta-actions">
              <a href="#classes" className="button button-primary">Start admissions</a>
              <a href={`tel:${schoolSupportNumber}`} className="button button-secondary">Talk to us</a>
            </div>
          </div>
        </section>

        <a href={whatsappLink} className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="Chat with Admissions on WhatsApp">
          Chat with Admissions
        </a>
      </div>
    </>
  );
}

export default AdmissionsPage;
